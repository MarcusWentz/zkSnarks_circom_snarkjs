const Web3 = require('web3')
const devWalletaddress = process.env.devWalletaddress // Your account address goes here
const rpcURL = process.env.rinkebyInfuraAPIKey// Your RPC URL goes here
const web3 = new Web3(rpcURL)
const contractAddress_JS = '0xad21B185a6AD414760fb6769B003F3A644c6F444'
const contractABI_JS = [{"inputs":[{"internalType":"bytes","name":"proof","type":"bytes"},{"internalType":"uint256[]","name":"pubSignals","type":"uint256[]"}],"name":"verifyProof","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
const contractDefined_JS = new web3.eth.Contract(contractABI_JS, contractAddress_JS)
const proof = "0x0c39e43941adf43a776289b608b1d5987891846e682e561bf77ae785cf24942a2b4611dde514183da9f1bc519c341d90f30383b062dfd76167905aa4522797050e12d6d1c9d5aa14b76765b944f9188e8f89b58f3af06ac5292763f4f1f31f6322edf2ebb13faefb89af7006af129c6eea7d00d0160a9c0ab0cb0e9739df678a028df9959168a3ee1ff1ad82311d251a105c72fe83d73c01596fdc71e7d53e3a1643368d4b4a06c91f07bf8e8bca293b6f2a86778222a917c9723e4a4725d5b90a2fd67de0a857a9cb82b8c8d122d4132f3dd2b32e5a86629d69f433f04dc110052be966617f6b78b9e082da814f7b6798bc74247185633c12691eaacf8cafd32b43d5f346ead290cd93f6d5da40d898596536bc172d4f5d1116e34ea60ea93012866563967fe5f9606ddfaa42ea3af75631fab753c0d16a8cf927028e78840f051a1f23736d78269b48da8f70e7345c5480fc179b8af4d52045730ef5ee7c731905ed2ef5e0e392aff9db904a1d0f379f27a4b6135fbd37e6024a31cf2bf57f27b25b082c95e2f0190e20f935ebe3bf77126d17865ce4eba8637a241ecc0cb72b96203edfadba69b9881d74e25d8ff007324b56df119782d836218c70fda1ac016848f06ef2c5530129aca667227153052a4c4c31f38ee2a547305ea2937f1e1244413bf70528d16592039c2a8155fc78593ca04147ad3fd296d886c86fa9b8295695631596db69fca9c3263ced326165d44653053a2361acf02b78135d74e20623d4fb3e44c55ef571910064fdb04f5666b593ad4933fc137d7d45274a52ea2ea98aee211416bcf3f5eb571c1c287fcd8d3db26497cfc9cfdd45afc3c8cfa30a9b75e69574b8624604718744be91234dbc0484d3b0c91712edf4714d88d1000b926634e17184ace88c407f54d2741a3b9ed35a3de4549d7aa763e1623e41e21de2cf149e3824a3f2a922c4aa41492a27620242923e5889de1c819b625d86b409b8336bcb44052ab8515fba3dc05014671a7152042cd68d9a036a9a003ba79e1b9c3a50943bb3336c1a4d7e93c4d8113a991536012e1f3b24e2be51b51cb25d122fe133cf6198a7db415824109f175edf272728e13ad3b070c2a19cc3178d61"
const public = ["0x00000000000000000000000000000000000000000000000000000000000080e8"]

function checkValueLatest() {
  contractDefined_JS.methods.verifyProof(0x0,[0x0]).call((err, balance) => {
    console.log({ err, balance })
  })
  contractDefined_JS.methods.verifyProof(proof,public).call((err, balance) => {
    console.log({ err, balance })
  })
}

checkValueLatest();
