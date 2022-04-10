# zkSnarks_circom_snarkjs

Solidity smart contract created using a zkSnark with public and private inputs.

Generated contract using snarkjs [PLONK] deployed on Rinkeby here: https://rinkeby.etherscan.io/address/0xad21B185a6AD414760fb6769B003F3A644c6F444

Use this to format output "proof,public" inputs for verify.sol for true/false feedback: https://lingojam.com/TexttoOneLine

Reference: https://github.com/iden3/snarkjs

After setting up a ceremony before a circuit, run the following to generate contract and proof in directory console:

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
