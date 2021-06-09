geth attach https://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31
geth attach wss://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31
{ block { number } }
const axios = require('axios');
const main = async () => {
  try {
    const result = await axios.post(
      'U',
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
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = 'pattern enroll upgrade ...';
...
module.exports = {
 networks: {https://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31
    chainstack: {
        provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
        network_id: "*"
    },
   }
  }
};
require("@nomiclabs/hardhat-waffle");
...
module.exports = {
  solidity: "0.7.3",
  networks: {
    chainstack: {https://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31
        url: "https://,
        accounts: ["0x1f719F4a36Ed189E7Fef1c7E7A5193DFA0f9f42B"]
    },
   }
};
chainstack: {
  deployment:{
    accounts: [
      {
        mnemonic: 'pattern enroll upgrade ...'
      }
    ],
    host: "ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31",
    port: false,
    protocol: "https",
    type: "rpc"
  }
}
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31'));

web3.eth.getBlockNumber().then(console.log);
from web3 import Web3

web3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
print(web3.eth.blockNumber)
from web3 import Web3

web3 = Web3(Web3.WebsocketProvider('wss://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31")))
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
  private static final String PASSWORD = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
  private static final String RPC_ENDPOINT = "infura https://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31";

  public static void main(String[] args) {
    try {

      OkHttpClient.Builder clientBuilder = new OkHttpClient.Builder();
      clientBuilder.authenticator(new Authenticator() {
          @Override public Request authenticate(Route route, Response response) throws IOException {
              String credential = Credentials.basic(USERNAME, PASSWORD);
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
const { ethers } = require("ethers");

var urlInfo = {
    url: 'https://ropsten.infura.io/v3/',
    user: '4b6f463c8f9e464abbeb9ad02c94cc31',
    password: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<4b6f463c8f9e464abbeb9ad02c94cc31>", 2);
};
var provider = new ethers.providers.JsonRpcProvider(urlInfo, NETWORK_ID);
const { ethers } = require("ethers");

const provider = new ethers.providers.WebSocketProvider('wss://wss://ropsten.infura.io/v3/4b6f463c8f9e464abbeb9ad02c94cc31', NETWORK_ID);
