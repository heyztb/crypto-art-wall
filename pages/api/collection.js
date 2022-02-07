import { PublicKey } from "@solana/web3.js";
import { Provider, Program } from "@project-serum/anchor";

import idl from '../../idl.json';

const handler = async (_req, res) => {
  try {
    const provider = Provider.env();
    const programId = new PublicKey(idl.metadata.address);
    const program = new Program(idl, programId, provider);
    
    const arr = Object.values(JSON.parse(process.env.NEXT_PUBLIC_ARTWALL_PUBLIC_KEY));
    const publicKey = new Uint8Array(arr);
    const artWallPubKey = new PublicKey(publicKey).toBase58();
  
    try {
      // fetch the account and associated data from solana
      const artwallAccount = await program.account.artWallAccount.fetch(artWallPubKey);

      /**
       * doing a few things here
       * 1) grab art collection
       * 2) map that resulting array to a new array where we
       * append a new property to each object containing a url to
       * an ipfs gateway so we can display the image
       * 3) reverse that array so that the more recent submissions
       * appear ahead of older ones
       */
      const collection = artwallAccount.artCollection.map((art) => {
        const url = `https://dweb.link/ipfs/${art.cid}`;
        art.url = url;
        return art;
      }).reverse();
  
      res.status(200).json({ collection });
    } catch (e) {
      res.status(500).json({ "error": e.message })
    }
  } catch (e) {
    res.status(500).json({ "error": e.message })
  }
}

export default handler;