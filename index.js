//variables to ensure the specified JS libraries are present
var web3 = require("@solana/web3.js");
var splToken = require("@solana/spl-token");

//instantiating a new connection instance to the solana devnet
async () => {
  // Connect to cluster
  var connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    "confirmed"
  );
};
