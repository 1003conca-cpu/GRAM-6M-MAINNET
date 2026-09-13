# Verification Record — GRAM 6M

## Target

- Network: TON Mainnet
- Jetton Master: `EQCTsLkm3fc0V1LVrAVeSTbKSvGAmqza0q9Dmb7eGCk3PtiO`
- Raw master: `0:93b0b926ddf7345752d5ac055e4936ca4af1809aacdad2af4399bede1829373e`

## Compiler and immutable source

- Compiler: Tolk `1.4.0`
- npm compiler package: `@ton/tolk-js@1.4.0`
- Verifier backup commit: `c03cd28500dfda162b430f37da01916e0803a5fe`
- Exact source files: 8
- Entrypoint: `contracts/JettonMinter.tolk`

## Independent build results

- TVM root hash hex: `6bf8f48ca97d3fd9c8e553344efe7af030c322459e2ee2197a052162f1961bfb`
- TVM root hash Base64: `a/j0jKl9P9nI5VM0Tv568DDDIkWeLuIZegUhYvGWG/s=`
- Built BoC SHA-256: `4846a1ca50e443f1e85cb7f28225f5e656e15bc9bd1e3013daf30117e8c7d7dc`
- Embedded Jetton Wallet hash: `7bfa53bce90ce26cd368ec2989eba2bd15d286104742f0e04659f485a03012ba`
- Embedded wallet Base64: `e/pTvOkM4mzTaOwpieuivRXShhBHQvDgRln0haAwEro=`

The build result is generated independently by `scripts/verify-build.mjs`; the verifier record's claimed hash is not used as build output.

## On-chain snapshot

Checked directly through TonAPI on 2026-09-12 UTC:

- Supply: `6,000,000 GRAM` (`6000000000000000` raw, decimals 9)
- Decimals: `9`
- Admin wallet: `UQD8iM3lmVu4UXnlPQ_YrpvuptNhDu1yfRbc9PtvxdL5fLKI`
- Admin raw: `0:fc88cde5995bb85179e53d0fd8ae9beea6d3610eed727d16dcf4fb6fc5d2f97c`
- Mintable: `true`
- Name: `TON GRAM`
- Symbol: `GRAM`
- Logo: `https://raw.githubusercontent.com/1003conca-cpu/gram-token-assets/main/gram-logo.png`
- On-chain/indexer code hash: `a/j0jKl9P9nI5VM0Tv568DDDIkWeLuIZegUhYvGWG/s=`

This token is NOT described as hard-capped or fixed-supply because the current admin retains mint authority (`mintable: true`).

## Scope

This repository does not mint, upgrade, change admin, change metadata, or perform any on-chain transaction. CI only compiles and checks deterministic hashes/tests.

The verifier record's `knownContractAddress` is not the GRAM 6M master; only its matching code-hash source record is used as provenance.