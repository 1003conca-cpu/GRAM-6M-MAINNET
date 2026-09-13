import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { runTolkCompiler, getTolkCompilerVersion } from '@ton/tolk-js';
import { Cell } from '@ton/core';

const EXPECTED_MASTER='6bf8f48ca97d3fd9c8e553344efe7af030c322459e2ee2197a052162f1961bfb';
const EXPECTED_WALLET='7bfa53bce90ce26cd368ec2989eba2bd15d286104742f0e04659f485a03012ba';
const EXPECTED_COMPILER='1.4.0';
const root=path.resolve('contracts');
const version=await getTolkCompilerVersion();
if(version!==EXPECTED_COMPILER) throw new Error(`compiler ${version} != ${EXPECTED_COMPILER}`);
const result=await runTolkCompiler({
  entrypointFileName:'JettonMinter.tolk',
  fsReadCallback:(p)=>fs.readFileSync(path.resolve(root,p),'utf8')
});
if(result.status==='error') throw new Error(result.message);
const master=result.codeHashHex.toLowerCase();
if(master!==EXPECTED_MASTER) throw new Error(`master hash ${master} != ${EXPECTED_MASTER}`);
const boc=Buffer.from(result.codeBoc64,'base64');
const artifact=crypto.createHash('sha256').update(boc).digest('hex');
const walletSrc=fs.readFileSync(path.join(root,'JettonWallet.code.tolk'),'utf8');
const m=walletSrc.match(/"([A-Za-z0-9+/=]+)" base64>B/);
if(!m) throw new Error('embedded wallet BoC not found');
const wallet=Cell.fromBoc(Buffer.from(m[1],'base64'))[0].hash().toString('hex');
if(wallet!==EXPECTED_WALLET) throw new Error(`wallet hash ${wallet} != ${EXPECTED_WALLET}`);
fs.mkdirSync('build',{recursive:true});
fs.writeFileSync('build/JettonMinter.boc',boc);
fs.writeFileSync('build/verification-result.json',JSON.stringify({compilerVersion:version,tvmRootHashHex:master,tvmRootHashBase64:Buffer.from(master,'hex').toString('base64'),artifactBocSha256:artifact,embeddedWalletHashHex:wallet,embeddedWalletHashBase64:Buffer.from(wallet,'hex').toString('base64')},null,2)+'\n');
console.log(`compiler=${version}`);
console.log(`tvmRootHashHex=${master}`);
console.log(`tvmRootHashBase64=${Buffer.from(master,'hex').toString('base64')}`);
console.log(`artifactBocSha256=${artifact}`);
console.log(`embeddedWalletHashHex=${wallet}`);
console.log('VERIFY_OK');