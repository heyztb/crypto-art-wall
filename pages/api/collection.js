import { PublicKey } from "@solana/web3.js";
import { Provider, Program } from "@project-serum/anchor";

import idl from '../../idl.json';

const handler = async (_req, res) => {
  const provider = Provider.env();
  const programId = new PublicKey(idl.metadata.address);
  const program = new Program(idl, programId, provider);
  
  const arr = Object.values(JSON.parse(process.env.NEXT_PUBLIC_ARTWALL_PUBLIC_KEY));
  const publicKey = new Uint8Array(arr);
  const artWallPubKey = new PublicKey(publicKey).toBase58();

  try {
    const artwallAccount = await program.account.artWallAccount.fetch(artWallPubKey);
    const collection = artwallAccount.artCollection;
    res.status(200).json({ collection });
  } catch (e) {
    res.status(500).json({ "error": e })
  }
}

export default handler;