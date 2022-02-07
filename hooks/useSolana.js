import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Provider, Program } from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import idl from '../idl.json';

const opts = {
  preflightCommitment: "processed"
};

const network = clusterApiUrl(WalletAdapterNetwork.Devnet);
const connection = new Connection(network, opts.preflightCommitment);
export function useSolana() {
  const wallet = useAnchorWallet();

  const provider = new Provider(connection, wallet, opts.preflightCommitment);

  const programId = new PublicKey(idl.metadata.address);
  const program = new Program(idl, programId, provider);

  const arr = Object.values(JSON.parse(process.env.NEXT_PUBLIC_ARTWALL_PUBLIC_KEY));
  const publicKey = new Uint8Array(arr);
  const artWallPubKey = new PublicKey(publicKey).toBase58();

  return { provider, program, artWallPubKey };
}