import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

test('exact verifier source set is 8 Tolk files',()=>{
  const files=fs.readdirSync('contracts').filter(x=>x.endsWith('.tolk')).sort();
  assert.equal(files.length,8);
  assert.deepEqual(files,['JettonMinter.tolk','JettonWallet.code.tolk','errors.tolk','fees-management.tolk','jetton-utils.tolk','messages.tolk','sharding.tolk','storage.tolk'].sort());
});

test('clean independent build matches master and wallet hashes',()=>{
  const out=execFileSync(process.execPath,['scripts/verify-build.mjs'],{encoding:'utf8'});
  assert.match(out,/VERIFY_OK/);
  const r=JSON.parse(fs.readFileSync('build/verification-result.json','utf8'));
  assert.equal(r.compilerVersion,'1.4.0');
  assert.equal(r.tvmRootHashHex,'6bf8f48ca97d3fd9c8e553344efe7af030c322459e2ee2197a052162f1961bfb');
  assert.equal(r.embeddedWalletHashHex,'7bfa53bce90ce26cd368ec2989eba2bd15d286104742f0e04659f485a03012ba');
});