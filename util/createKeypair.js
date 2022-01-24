/**
 * this file should be run directly from the command line
 * ` node util/createKeypair.js `
 * store the public key in .env.local with the prefix NEXT_PUBLIC_
 * this will allow the browser to read the environment variable
 * and avoids storing the keypair file in version control
 * or storing the keypair in a secret management system
*/

const fs = require('fs')
const anchor = require("@project-serum/anchor")

const account = anchor.web3.Keypair.generate()

fs.writeFileSync('./keypair.json', JSON.stringify(account))