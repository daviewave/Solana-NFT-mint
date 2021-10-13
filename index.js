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

/*2.a CREATING THE NFT */
//Generate a new wallet keypair and airdrop SOL the specified amount of Sol tokens being used to mint the particular NFT
var fromWallet = web3.Keypair.generate();
var fromAirdropSignature = await connection.requestAirdrop(
  fromWallet.publicKey,
  web3.LAMPORTS_PER_SOL
);

//Pauses and waits to ensure the airdrop is confirmed
await connection.confirmTransaction(fromAirdropSignature);

//Use the airdropped tokens to create new token mint
/*Arguments:
    1. The connection to the Solana Network. (connection)
    2. The account that will pay the fee. (fromWallet) 
    3. The public key of the account that has the authority to mint tokens of this type. (fromWallet.publicKey) 
    4. The public key of the account that has the authority to freeze tokens of this type. This argument is optional. (null)
    5. Amount of decimal places for your token. Most Solana tokens have 9 decimal places. 
    6. The program id of the token --> The program's account's owner specifies which loader should be used to load and execute the program and the data contains information about how the runtime should execute the program.
*/
let mint = await splToken.Token.createMint(
  connection,
  fromWallet,
  fromWallet.publicKey,
  null,
  9,
  splToken.TOKEN_PROGRAM_ID
);

//get the token account of the fromWallet Solana address, if it does not exist, create it
let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
  fromWallet.publicKey
);

/*2.b. NEED A SOLANA ACCOUNT TO SEND THE MINTED NFT TOO*/
//Generates a new wallet to recieve the minted NFT tokens
var toWallet = web3.Keypair.generate();

//gets the token account of the toWallet Solana address, if it does not exist, create it
var toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
  toWallet.publicKey
);

/*3. MINTING THE NFT*/
//mints 1 new token to the "fromTokenAccount" account we just returned/created
await mint.mintTo(
  fromTokenAccount.address, //who it goes to
  fromWallet.publicKey, // minting authority
  [], // multisig
  1000000000 // how many
);
