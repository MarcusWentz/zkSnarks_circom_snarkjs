const Web3 = require('web3')
const devWalletaddress = process.env.devWalletaddress // Your account address goes here
const rpcURL = process.env.rinkebyInfuraAPIKey// Your RPC URL goes here
const web3 = new Web3(rpcURL)
const contractAddress_JS = '0x28Ec16de6DF100CA30B4eac94D16a1D0547FEb1f'
const contractABI_JS = [{"inputs":[{"internalType":"bytes","name":"proof","type":"bytes"},{"internalType":"uint256[]","name":"pubSignals","type":"uint256[]"}],"name":"verifyProof","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]

const contractDefined_JS = new web3.eth.Contract(contractABI_JS, contractAddress_JS)
const proof = "0x2b753b499cb98907f2621b79bc9f11c26eb66f8aa588494f3fc56737fc2f8ff522c3553924aa18dc986f1666543c52e7e7ace409605442531133831ee3a074202c791cdcf8fc470bbbe6fe1c244e600330b36d1ef376b967846dd3d1a565420b0b0622fe8886228c50b7892b04ffb1f4f362b9fd6954baacb95b5f679c2bf98a1a1131e91012efae89319e2a30d80efe8db38ad99a21a4555174b6dda055ef7d0b05415d2a1a706adf20913c28c10af998f0730c64cb41fc7c568a96bea5119a164046f39115d287412f60581d613bd74f8c76bf59d4735f1528e2d11ce89d331d196bff9d8e8eb34959c7d344eb8ab945d7a1bda5f07e9624c0fb39725e4723247fca23728969b36c9fcfedf919dc95505ad6a3763e825853c4869159da562b089db8c68b5ebe296f4dbddf8c7c37139cab4752f8942fe372f845063a34cf8a08d7fd9568a21abd2af8cf14c5cb160d7dce8b17ec4c75a6bd755fd7e414d17b0061e6326467bd0c8ce035a56a8ae06cd38193df0e53455c7568d5845678c3e519d1026461031c0c9cf7248cc7a992d38899deae92b2a2c8c463e5927235199a21fdc76be31322ff49f13337f1cb469692cf3ac8d5eb4e6a6b0ccdab77ae024c253a9aa7716b4d3043c69f7ef0e9a1f66b9ce4c48597d48d8e75448b3c3da044242b9f4530b65c6c5697e3acebe6b5935526cec2ed4f332e37d489a791a2a5db043ecce60715a12803847cc7a86bd4482f6dade199c4881a47281db51352af61068963b4846b0b3a18ddde37fc321b523e57aeacc85e08f023cd0d05e299badf2c109febae9dd87987f0d81ed3e4a45bdc6ad78492e9778517cbc89e2cfe72e50d7456aebba770bce7eb16176babcb846ac0c00e18885eeda65c30cf78b6240b046640de00cf14417c5f815bc2c52ba10480b0ecd2dabd0a8c6f9174181a179f243e26ccd576fea1e44e21bd5a769f57e4478c0f0178d331bceafe9b8ff3d778243006d73f4d2fbdc65ef1776a16a36c4b891556bee11172612ad2486e67268810dfde830a01353c6965832572ac5dd77fd3299d8876eb1c73f74132375df1422659122fd8577c595e041d2922f3afd4ea3a36227ad3bf912acec633ca550fb3"
const public = ["0x110d778eaf8b8ef7ac10f8ac239a14df0eb292a8d1b71340d527b26301a9ab08"]

function checkValueLatest() {
  contractDefined_JS.methods.verifyProof(0x0,[0x0]).call((err, balance) => {
    console.log({ err, balance })
  })
  contractDefined_JS.methods.verifyProof(proof,public).call((err, balance) => {
    console.log({ err, balance })
  })
}

checkValueLatest();
