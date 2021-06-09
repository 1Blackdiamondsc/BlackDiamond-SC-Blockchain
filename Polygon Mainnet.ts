bor attach bor attach 
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =  new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
...
module.exports = {
 networks: {
    mainnet: {
        provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31"),
        network_id: 137,
        confirmations: 3,
        timeoutBlocks: 200,
        skipDryRun: true
    },
   }
  }
};
require("@nomiclabs/hardhat-waffle");
...
module.exports = {
  solidity: "0.7.3",
  networks: {
    chainstack: {
        url: "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31",
        chainId: 137,
        gasPrice: 20000000000,
        accounts: ["0x81e6a9d49dd2f95F653CDbF7FbaFbF2264c0591b"]
    },
   }
};
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));

const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://user-name:pass-word-pass-word-pass-word@ws-nd-123-456-789.p2pify.com'));

web3.eth.getBlockNumber().then(console.log);
from web3 import Web3

web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
from web3 import Web3

web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
from web3 import Web3

web3 = Web3(Web3.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
const { ethers } = require("ethers");

var urlInfo = {
    url: 'RPC_ENDPOINT',https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31
    user: 'USERNAME', 4b6f463c8f9e464abbeb9ad02c94cc31
    mnemonic phase:  new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2),
};
