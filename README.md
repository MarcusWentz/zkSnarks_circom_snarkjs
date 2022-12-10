# zkSnarks_circom_snarkjs

Solidity smart contract created using a zkSnark with public and private inputs.

## zkSnark and Public Input Signal(s)

    circuit.circom

## Output Signal(s)

    proof.json

## Secret Input Signal(s)

    input.json

## Generate verifier.sol along with proof and inputs

After setting up a ceremony before a circuit, run the following to generate contract and proof in directory console:

    bash generateProofAndSignals.sh

You can also manually copy and paste the commands all at once into your terminal:

    circom circuit.circom --r1cs --wasm --sym
    snarkjs r1cs export json circuit.r1cs circuit.r1cs.json
    cd circuit_js
    node generate_witness.js circuit.wasm ../input.json ../witness.wtns
    cd ../
    snarkjs plonk setup circuit.r1cs pot12_final.ptau circuit_final.zkey
    snarkjs zkey verify circuit.r1cs pot12_final.ptau circuit_final.zkey
    snarkjs zkey export verificationkey circuit_final.zkey verification_key.json
    snarkjs plonk prove circuit_final.zkey witness.wtns proof.json public.json
    snarkjs plonk verify verification_key.json public.json proof.json
    snarkjs zkey export solidityverifier circuit_final.zkey verifier.sol
    snarkjs zkey export soliditycalldata public.json proof.json

Note: the output proof can change for the same zkSnark and Solidity smart contract.

## Deployed and zkSnark verified contract

Generated verifier.sol contract using snarkjs [PLONK] deployed and verified on Goerli:

https://goerli.etherscan.io/address/0xa1f170ed7d3f7210a2ccac11b21531921174e7af#code

## Format proof and inputs for verifier.sol

Formats the outputs for ```proof``` and ```pubSignals``` from:

    snarkjs zkey export soliditycalldata public.json proof.json

```proof``` and ```pubSignals``` are inputs for verifier.sol to test if the proof being correct is true or false:

https://lingojam.com/TexttoOneLine

## Reference:

https://github.com/iden3/snarkjs
