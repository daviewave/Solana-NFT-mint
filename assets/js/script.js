//DATA+DEPENDENCIES
var connectPhantom = document.getElementById("phantom-wallet");
var connectWallet2 = document.getElementById("wallet-2");
var connectWallet3 = document.getElementById("wallet-3");

//will be able to append new sections to this variable after all other elements that need to go within that section are created
var $targetMainContainer = $("#main-container");

//FUNCTIONS
function connectPhantomWallet() {
  //write code to connect to wallet here
}

function connectWallet_2() {
  //write code to connect to wallet here
}

function connectWallet_3() {
  //write code to connect to wallet here
}

/*TODO: WILL NEED FUNCTIONS TO CREATE AND ADD THE OTHER SECTIONS OF THE SITE AS THE USER CLICKS ON DIFFERENT OPTIONS TO NAV WITH NAVBARD*/
//TODO(1): WRITE FUNCTION TO CREATE 'ABOUT' SECTION
function createAboutSection($container) {
  var $aboutContainerDiv = $("<div>");
}

//TODO(1.A): CREATE THE 'SUB-CONTAINER' DIV THAT WILL HOLD ALL OTHER CONTENTS
var $aboutContainerDiv = $("<div>");

//TODO(2): WRITE FUNCTION TO CREATE 'RARITY' SECTION
function createRaritySection($container) {}

//TODO(3): WRITE FUNCTION TO CREATE 'ROADMAP' SECTION
function createRoadmapSection($container) {}

//TODO(4): WRITE FUNCTION TO CREATE 'FAQ' SECTION
function createFaqSection($container) {}

//HELPER FUNCTIONS

//USER INTERACTIONS
connectPhantom.addEventListener("click", connectPhantomWallet);

connectWallet2.addEventListener("click", connectWallet_2);

connectWallet3.addEventListener("click", connectWallet_3);
