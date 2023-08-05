import './polyfills';
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'

import { App } from './App'
import { wagmiChains, wagmiConfig } from './configs/connectors'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={wagmiChains} theme={lightTheme({
                borderRadius: 'medium',
                overlayBlur: "large",
                fontStack: "rounded",
                accentColor: "#61DFFF",
                accentColorForeground: "black"
            })}>
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </BrowserRouter>,
)
