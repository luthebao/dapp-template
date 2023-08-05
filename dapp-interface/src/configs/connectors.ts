import {
    connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import { Chain, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
// import { lineaTestnet } from 'wagmi/chains'
import * as wagmiCore from "wagmi/actions"

import {
    argentWallet,
    braveWallet,
    coinbaseWallet,
    injectedWallet,
    ledgerWallet,
    metaMaskWallet,
    okxWallet,
    trustWallet,
    walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { lineaTestnet } from 'viem/chains';


export const opBNBTestnet: Chain = {
    id: 5611,
    name: "opBNB Testnet",
    network: "opbnb-testnet",
    nativeCurrency: {
        name: "Testnet BNB",
        symbol: "tBNB",
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ["https://opbnb-testnet-rpc.bnbchain.org"]
        },
        public: {
            http: ["https://opbnb-testnet-rpc.bnbchain.org"]
        },
    },
    blockExplorers: {
        default: {
            name: "opBNB Testnet Explorer",
            url: "https://opbnbscan.com/"
        }
    },
    testnet: true
}

export const lineaMainnet: Chain = {
    id: 59144,
    name: "Linea",
    network: "linea-mainnet",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.linea.build"]
        },
        public: {
            http: ["https://rpc.linea.build"]
        },
    },
    blockExplorers: {
        default: {
            name: "Linea Scan",
            url: "https://lineascan.build"
        }
    },
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        // goerli,
        lineaTestnet,
        lineaMainnet
    ],
    [
        publicProvider()
    ]
)

const projectId = "PROJECT_ID"

const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            injectedWallet({ chains }),
            metaMaskWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            argentWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            walletConnectWallet({
                projectId,
                chains,
                version: "2"
            }),
            coinbaseWallet({ appName: "zkLine", chains }),
        ],
    },
    {
        groupName: 'Others',
        wallets: [
            trustWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            okxWallet({
                chains,
                projectId,
                walletConnectVersion: "2"
            }),
            braveWallet({
                chains
            }),
            ledgerWallet({
                chains, projectId,
                walletConnectVersion: "2"
            }),

        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: connectors,
    publicClient,
    webSocketPublicClient
})


export { chains as wagmiChains, wagmiConfig, lineaTestnet as mainChain, publicClient, wagmiCore }