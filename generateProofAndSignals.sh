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
