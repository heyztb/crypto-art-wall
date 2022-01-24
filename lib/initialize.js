/**
 * this file should be run directly from the command line
 * ` node util/initialize.js `
 * it will initialize the artwall solana program
 * so that it can be used in the frontend application
 */

// load environment variables
const { loadEnvConfig } = require('@next/env');
const { PublicKey, Keypair, SystemProgram } = require("@solana/web3.js");
const { Provider, Program  } = require("@project-serum/anchor");
const idl = require('../idl.json');

(async () => {
  loadEnvConfig(process.cwd())
  const provider = Provider.env()

  const programId = new PublicKey(idl.metadata.address);
  const program = new Program(idl, programId, provider);

  const arr = Object.values(JSON.parse(process.env.ARTWALL_SECRET_KEY));
  const secret = new Uint8Array(arr);
  const account = Keypair.fromSecretKey(secret)

  const tx = await program.rpc.initialize({
    accounts: {
      artwallAccount: account.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [account]
  });

  console.log(`🚀 Artwall account has been initialized: ${tx}`)
})()





