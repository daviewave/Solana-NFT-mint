/*1. ESTABLISHING CONNECTION TO SOLANA NETWORK*/
//variables to ensure the specified JS libraries are present
var web3 = require("@solana/web3.js");
var splToken = require("@solana/spl-token");

//Instantiating a new connection instance to the solana devnet
async () => {
  // Connect to cluster
  var connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    "confirmed"
  );
};

/*2. CREATING THE NFT */
//Generate a new wallet keypair and airdrop SOL the specified amount of Sol tokens being used to mint the particular NFT
var fromWallet = web3.Keypair.generate();
var fromAirdropSignature = await connection.requestAirdrop(
  fromWallet.publicKey,
  web3.LAMPORTS_PER_SOL
);

//Pauses and waits to ensure the airdrop is confirmed
await connection.confirmTransaction(fromAirdropSignature);
