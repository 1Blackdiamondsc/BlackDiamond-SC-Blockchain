// JavaScript source code
geth attach 
geth attach 
> web3.fromWei(web3.bsc.getBalance("0xfE7e5BAB8c5705BD079001Cad8639b27B2371ce8"))
9,999,894.915924192743427087

GraphQL

{block{number}}

Nodejs

const axios = require('axios');
const main = async () => {
  try {
    const result = await axios.post(
      'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
      {
        query: `
          QUERY
        `
      }
    );
    console.log(result.data);
  } catch(error) {
    console.error(error);
  }
}
main();

const axios = require('axios');
const main = async () => {
  try {
    const result = await axios.post(
      'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
      {
        query: `
          { block { number } }
        `
      }
    );
    console.log(result.data);
  } catch(error) {
    console.error(error);
  }
}
main();

Truffle Suite

const HDWalletProvider = require("@truffle/hdwallet-provider");
const new HDWalletProvider(mnemonic, "https://miainnet.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
...
module.exports = {
 networks: {
    chainstack: {
        provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31"),
        network_id: "*"
    },
   }
  }
}; Hardhat

require("@nomiclabs/hardhat-waffle");
...
module.exports = {
  solidity: "0.7.3",
  networks: {
    chainstack: {
        url: "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31",
        accounts: ["0x72A35fB40D4c9349798A51da52ef3380573558ef, 0x76750897bbaadDB327f96b304f1F4dE70b7AFed6,0x81e6a9d49dd2f95F653CDbF7FbaFbF2264c0591b"]
    },
   }
};

Embark
chainstack: {
  deployment:{
    accounts: [
      {
         new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2),
      }
    ],
    host: "mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31",
    port: false,
    protocol: "https",
    type: "rpc"
  }
}
 web3.js

const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));

web3.eth.getBlockNumber().then(console.log);


HTTP

from web3 import Web3

web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
 
Websockets

from web3 import Web3

web3 = Web3(Web3.WebsocketProvider('wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)

package getLatestBlock;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.exceptions.ClientConnectionException;
import org.web3j.protocol.http.HttpService;

import okhttp3.Authenticator;
import okhttp3.Credentials;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.Route;

public final class App {

  private static final String USERNAME = "4b6f463c8f9e464abbeb9ad02c94cc31";
  private static final String MNEMONIC PHASE = HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
  private static final String RPC_ENDPOINT = "https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31";

  public static void main(String[] args) {
    try {

      OkHttpClient.Builder clientBuilder = new OkHttpClient.Builder();
      clientBuilder.authenticator(new Authenticator() {
          @Override public Request authenticate(Route route, Response response) throws IOException {
              String credential = Credentials.basic(heuristic-jones, motion-camera-viable-visor-crib-bottle);
              return response.request().newBuilder().header("Authorization", credential).build();
          }
      });

      HttpService service = new HttpService(RPC_ENDPOINT, clientBuilder.build(), false);
      Web3j web3 = Web3j.build(service);


      EthBlock.Block latestBlock = web3.ethGetBlockByNumber(DefaultBlockParameterName.LATEST, false).send().getBlock();


      System.out.println("Latest Block: #" + latestBlock.getNumber());

    } catch (IOException | ClientConnectionException ex) {

      Logger.getLogger(App.class.getName()).log(Level.SEVERE, null, ex);
    }
  }

}

HTTP
const { ethers } = require("ethers");

var urlInfo = {
    url: 'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
    user: '4b6f463c8f9e464abbeb9ad02c94cc31',
    const new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
};
var provider = new ethers.providers.JsonRpcProvider(urlInfo, NETWORK_ID);

const { ethers } = require("ethers");

var urlInfo = {
    url: 'https://mainnet.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31',
    user: '4b6f463c8f9e464abbeb9ad02c94cc31',
   const new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
};
var provider = new ethers.providers.JsonRpcProvider(urlInfo, 1);

provider.getBlockNumber().then(console.log);

Web Socket

const { ethers } = require("ethers");

const provider = new ethers.providers.WebSocketProvider(''wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31, NETWORK_ID);
const { ethers } = require("ethers");

const provider = new ethers.providers.WebSocketProvider(''wss://mainnet.infura.io/ws/v3/4b6f463c8f9e464abbeb9ad02c94cc31, 1);

provider.getBlockNumber().then(console.log);

docker run -d --name ethereum-node -v /Users/alice/ethereum:/root \
           -p 8545:8545 -p 30303:30303 \
           ethereum/client-go
