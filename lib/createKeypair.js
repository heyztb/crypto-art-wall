/**
 * this file should be run directly from the command line
 * ` node util/createKeypair.js `
*/

const fs = require('fs')
const anchor = require("@project-serum/anchor")

const account = anchor.web3.Keypair.generate()

fs.writeFileSync('./keypair.json', JSON.stringify(account))