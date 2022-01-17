import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

import '../styles/globals.css'
import "@solana/wallet-adapter-react-ui/styles.css";
import MenuBar from '../components/common/MenuBar';

function ArtWallApp({ Component, pageProps }) {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter(),
    new LedgerWalletAdapter(),
    new SolletWalletAdapter({network}),
    new SolletExtensionWalletAdapter({network}),
  ], [network])

  return (
    <ConnectionProvider endpoint={endpoint}> 
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <MenuBar />
          <Component {...pageProps } />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default ArtWallApp
