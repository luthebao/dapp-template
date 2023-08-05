import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";

export default {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [
      ],
    },
    polygonzkTestnet: {
      url: "https://rpc.public.zkevm-test.net",
      accounts: []
    },
    polygonzkMainnet: {
      url: "https://zkevm-rpc.com",
      accounts: []
    },
    opBNBtestnet: {
      url: "https://opbnb-testnet-rpc.bnbchain.org",
      gasPrice: 3000000,
      accounts: []
    },
  },
  etherscan: {
    apiKey: {
      goerli: "5GB9UC81MHTMV4U11BG61HBJUGTTT791J6",
      polygonzkTestnet: "GW4CFZHJP157RXWEW33M2PYDWSG3HJI2KV",
      polygonzkMainnet: "GW4CFZHJP157RXWEW33M2PYDWSG3HJI2KV",
      opBNBtestnet: "0"
    },
    customChains: [
      {
        network: "polygonzkTestnet",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
          browserURL: "https://testnet-zkevm.polygonscan.com/"
        }
      },
      {
        network: "polygonzkMainnet",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com/api",
          browserURL: "https://zkevm.polygonscan.com/"
        }
      },
      {
        network: "opBNBtestnet",
        chainId: 5611,
        urls: {
          apiURL: "https://op-bnb-testnet-explorer-api.nodereal.io/api",
          browserURL: "https://opbnbscan.com/"
        }
      },
    ]
  },
  solidity: {
    compilers: [
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
