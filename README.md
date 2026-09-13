# GRAM 6M MAINNET — Reproducible Verification

This repository contains the exact 8-file Tolk source set associated by TON Contract Verifier with code hash `6bf8f48ca97d3fd9c8e553344efe7af030c322459e2ee2197a052162f1961bfb`.

Target TON Mainnet Jetton Master:
`EQCTsLkm3fc0V1LVrAVeSTbKSvGAmqza0q9Dmb7eGCk3PtiO`

Admin wallet:
`UQD8iM3lmVu4UXnlPQ_YrpvuptNhDu1yfRbc9PtvxdL5fLKI`

## Source provenance

Immutable verifier snapshot:
`ton-community/contract-verifier-backup@c03cd28500dfda162b430f37da01916e0803a5fe`

Verifier record path:
`6b/f8f48ca97d3fd9c8e553344efe7af030c322459e2ee2197a052162f1961bfb/verification.json`

The verifier record's `knownContractAddress` is NOT asserted to be the GRAM 6M master. The record is used here only as source provenance for the matching code hash.

## Reproducible build

Compiler is pinned to `@ton/tolk-js@1.4.0`, which reports `Tolk compiler v1.4.0`.

```bash
npm ci
npm run verify
npm test
```

Expected master TVM root hash:
`6bf8f48ca97d3fd9c8e553344efe7af030c322459e2ee2197a052162f1961bfb`

Expected Base64:
`a/j0jKl9P9nI5VM0Tv568DDDIkWeLuIZegUhYvGWG/s=`

Expected embedded Jetton Wallet hash:
`7bfa53bce90ce26cd368ec2989eba2bd15d286104742f0e04659f485a03012ba`

See `VERIFICATION.md` and `ONCHAIN_SNAPSHOT.json` for evidence and current chain state.