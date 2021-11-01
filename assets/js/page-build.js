//container targets on html
var $targetMainContainer = $("#main-container");
var $targetHomeContainer = $("#home-container");
var $targetAboutContainer = $("#about-container");
var $targetRarityContainer = $("#rarity-container");
var $targetRoadmapContainer = $("#roadmap-container");
var $targetFAQContainer = $("#faq-container");

//button targets on html
var $homeBtn = $("#home-container-button");
var $aboutBtn = $("#about-container-button");
var $rarityBtn = $("#rarity-container-button");
var $roadmapBtn = $("#roadmap-container-button");

//the amount of NFTs in our collection
var numNFTs = 5;

/*TODO: WILL NEED FUNCTIONS TO CREATE AND ADD THE OTHER SECTIONS OF THE SITE AS THE USER CLICKS ON DIFFERENT OPTIONS TO NAV WITH NAVBARD*/
//DONE(1): WRITE A FUNCTION TO CREATE 'HOME' SECTIONS
function returnToHomeSection() {
  //1st remove the current container from the main-container if you did not try to re-enter the same container
  var $currentContainer = getCurrentContainer();
  if ($currentContainer.attr("id") == "home-container") {
    return;
  } else removeContainerFromMain($currentContainer);

  //FINAL: append homeContainerDiv to the $container passed in
  $targetMainContainer.append($targetHomeContainer);
}

//DONE(2): WRITE FUNCTION TO CREATE 'ABOUT' SECTION
function createAboutSection() {
  //1st remove the current container from the main-container if you did not try to re-enter the same container
  var $currentContainer = getCurrentContainer();
  if ($currentContainer.attr("id") === "about-container") {
    return;
  } else removeContainerFromMain($currentContainer);

  //2nd create about-sub-containers (biggest container)
  var $aboutContainerDiv = $("<div>"); //1.
  $aboutContainerDiv.addClass("sub-container");
  $aboutContainerDiv.attr("id", "about-container");

  //3nd creates 2 'col' divs
  var $aboutLeftColumnDiv = $("<div>"); //2.
  var $aboutRightColumnDiv = $("<div>"); //3.

  //4th add classes for styling
  $aboutLeftColumnDiv.addClass("col-5 column-containers column-containers");
  $aboutLeftColumnDiv.attr("id", "about-container-left-column");

  $aboutRightColumnDiv.addClass("col-6 column-containers column-containers");
  $aboutRightColumnDiv.attr("id", "about-container-right-column");

  //4th calls functions to add the individual elements to the column containers
  createLeftAboutColumn($aboutLeftColumnDiv);
  createRightAboutColumn($aboutRightColumnDiv);

  //6th append left and right column divs to
  $aboutContainerDiv.append($aboutLeftColumnDiv);
  $aboutContainerDiv.append($aboutRightColumnDiv);

  //FINAL: append aboutContainerDiv to the $container passed in
  $targetMainContainer.append($aboutContainerDiv);
}

//DONE(2.A): CREATE THE LEFT COLUMN DIV THAT WILL HOLD CONTENTS FROM LEFT SIDE OF THE SCREEN
function createLeftAboutColumn($columnDiv) {
  //Creates left column header element
  var $aboutLeftHeader = $("<h1>");
  $aboutLeftHeader.attr("id", "about-container-left-column-h1");
  $aboutLeftHeader.addClass("text-center ");
  $aboutLeftHeader.text("ABOUT PAGE HEADER");

  //Creates left column paragragh element
  var $aboutLeftParagragh = $("<p>");
  $aboutLeftParagragh.attr("id", "about-container-left-column-para");
  $aboutLeftParagragh.text(
    "All you wanted was to be free and identify as kangaroo and you were cancelled? all you did was say opera was annoying and ugly and you were cancelled"
  );

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /* MIGHT WANT TO BUT ANOTHER DIV TO APPEND BOTH ON, THEN APPEND JUST THE 1 DIV TO THE ABOUT-CONTAINER */
  /////////////////////////////////////////////////////////////////////////////////////////////////

  //append new elements to the $columnDiv passed in as a argument
  $columnDiv.append($aboutLeftHeader);
  $columnDiv.append($aboutLeftParagragh);
}

//DONE(2.B): CREATE THE LEFT COLUMN DIV  THAT WILL HOLD CONTENTS FROM LEFT SIDE OF THE SCREEN
function createRightAboutColumn($columnDiv) {
  //Creates elements to be added to leftColumnDiv
  var $aboutRightParagragh = $("<p>");
  $aboutRightParagragh.addClass("center");
  $aboutRightParagragh.attr("id", "about-right-p");

  //add text to the elements created
  $aboutRightParagragh.text("ADD ABOUT PARAGRAGH HERE");

  //append new elements to the $columnDiv passed in as a argument
  $columnDiv.append($aboutRightParagragh);
}

//DONE(3): WRITE FUNCTION TO CREATE 'RARITY' SECTION
function createRaritySection() {
  //1st remove the current container from the main-container if you did not try to re-enter the same container
  var $currentContainer = getCurrentContainer();
  if ($currentContainer.attr("id") === "rarity-container") {
    return;
  } else removeContainerFromMain($currentContainer);

  //2nd create about-sub-containers (biggest container)
  var $rarityContainerDiv = $("<div>"); //1.
  $rarityContainerDiv.attr("id", "rarity-container");
  $rarityContainerDiv.addClass("sub-container");

  //3rd create the h1 element for the rarity-container header
  var $rarityHeader = $("<h1>");
  $rarityHeader.attr("id", "rarity-container-h1");
  // $rarityHeader.addClass("center");
  $rarityHeader.text("COLLECTION TITLE");

  //4th (1ST APPEND IN FUNCTION) append our header
  $rarityContainerDiv.append($rarityHeader);

  //5. Create a div to hold all the cards
  var $allNFTcardsDiv = $("<div>");
  $allNFTcardsDiv.attr("id", "NFT-cards-container"); //GOING TO NEED A LOT OF CSS STYLING TO THIS CONTAINER
  $allNFTcardsDiv.addClass("text-center");

  //5.A. going to need to add a 'card' for each NFT we have -- TODO: WRITE FUNCTION TO THAT CAN 'ADD' CARDS
  createAndAppendNFTDisplayCards($allNFTcardsDiv);

  //FINAL: append rarityContainerDiv to the $container passed in
  $rarityContainerDiv.append($allNFTcardsDiv);
  $targetMainContainer.append($rarityContainerDiv);
}

//DONE: WRITE FUNCTION THAT CAN CREATE CARDS --
function createAndAppendNFTDisplayCards($rarityContainer) {
  //gonna need to loop through the total number of NFTs
  for (var i = 0; i < numNFTs; i++) {
    /* BUILD STARTING FROM MOST INNER DIVS TO OUTTER */
    //STEP 1: this is the div that that will contain the card-body elements
    var $NFTcardBodyDiv = $("<div>");
    $NFTcardBodyDiv.attr("id", "card-body");
    $NFTcardBodyDiv.addClass("card-body");
    //1.A. calls a helper function to append three individual pieces of the body
    addBodyToNFTCards($NFTcardBodyDiv);

    //STEP 2: CREATE AND COL-DIV FOR STYLING
    var $colDiv1 = $("<div>");
    $colDiv1.attr("id", "card-colDiv");
    $colDiv1.addClass("col-md-8");

    //2.A.APPEND CARD BODY DIV TO COL DIV
    $colDiv1.append($NFTcardBodyDiv);

    //3. Will place an image for the NFT on this div
    var $imageDiv = $("<div>");
    $imageDiv.attr("id", "card-image-div");
    $imageDiv.addClass("col-md-4");
    //add image to $imageDiv
    addImageToNFTcard($imageDiv);

    //4. ADD ROW-DIV SO IMAGE-DIV + COL-DIV CAN BE APPENDED TO IT
    //Just adds a class for styling
    var $rowDiv1 = $("<div>");
    $rowDiv1.attr("id", "card-rowDiv");
    $rowDiv1.addClass("row no-gutters");

    //4.B. APPEND IMAGE-DIV + COL-DIV TO ROW-DIV
    $rowDiv1.append($imageDiv);
    $rowDiv1.append($colDiv1);

    //5. CREATE THE FULL CARD DIV TO ADD THE ROW-DIV CONTAINING ALL APPENDED ELEMENTS AND CARDS ARE COMPLETE
    var $NFTcardDiv = $("<div>"); //1st div
    $NFTcardDiv.attr("id", "card-NFT");
    $NFTcardDiv.addClass("card mb-3 card-max-width center-horizontal");

    //5.A. APPEND ROW-DIV TO NFT-CARD-DIV
    $NFTcardDiv.append($rowDiv1);

    //6. (FINAL) APPEND NFT CARD TO RARITY-CONTAINER PASSED INTO FUNCTION
    $rarityContainer.append($NFTcardDiv);
  }
}

//DONE: WRITE FUNCTION TO THAT ADDS AND CREATES THE BODIES OF THE CARDS
function addBodyToNFTCards($currentCardBody) {
  //creates the header for the card
  var $cardBodyHeader = $("<h5>");
  $cardBodyHeader.attr("id", "card-body-header");
  $cardBodyHeader.addClass("card-title");
  $cardBodyHeader.text("NFT-TITLE-FILLER");

  //creates the first p in the NFT-card body
  var $cardBodyP1 = $("<p>");
  $cardBodyP1.attr("id", "card-body-para1");
  $cardBodyP1.addClass("card-text");
  $cardBodyP1.text("First paragraph of the NFT card body");

  //creates the second p in the NFT-card body
  var $cardBodyPara2 = $("<p>");
  $cardBodyPara2.attr("id", "card-body-para2");
  $cardBodyPara2.addClass("card-text");
  $cardBodyPara2.text("Second pararaph of the NFT card body");

  //append the created elements to the current NFT card
  $currentCardBody.append($cardBodyHeader);
  $currentCardBody.append($cardBodyP1);
  $currentCardBody.append($cardBodyPara2);
}

function addImageToNFTcard($imgDiv) {
  //add image to $imageDiv
  var $curNFTimage = $("<img>");
  $curNFTimage.attr("id", "card-image"); //Gonna Need
  $curNFTimage.attr("src", "assets/images/card-placeholder2.jpg");
  $curNFTimage.attr("alt", "NFT-Placeholder Image");
  $curNFTimage.addClass("card-img ");

  $imgDiv.append($curNFTimage);
}

//TODO(4): WRITE FUNCTION TO CREATE 'ROADMAP' SECTION
function createRoadmapSection() {
  var $currentContainer = getCurrentContainer();
  console.log($currentContainer);
  if ($currentContainer.attr("id") === "roadmap-container") {
    return;
  } else removeContainerFromMain($currentContainer);
  // //TODO: MAKE THE HEADER-DIV
  $roadmapHeader = $("<h1>");
  $roadmapHeader.attr("id", "roadmap-header");
  $roadmapHeader.addClass("designing-border center-horizontal");
  $roadmapHeader.text(
    "GONNA GET TO SPACE ONE WAY OR ANOTHER, MIGHT AS WELL DO IT WITH DANNY DEVITO :)"
  );

  //TODO: MAKE THE BODY-DIV
  var $roadmapBodyImg = $("<div>");
  // $roadmapBodyImg.addClass("designing-border");
  var $roadMapImg = $("<img>");

  $roadMapImg.attr("id", "roadmap-img");
  $roadMapImg.attr("src", "assets/images/roadmap-placeholder.jpg");
  $roadMapImg.addClass("designing-border center-horizontal");
  $roadmapBodyImg.append($roadMapImg);

  //TODO: MAKE THE CONTAINER-DIV TO STORE THE HEADER AND PARA
  var $roadmapContainerDiv = $("<div>");
  $roadmapContainerDiv.attr("id", "roadmap-container");
  $roadmapContainerDiv.addClass("sub-container");
  $roadmapContainerDiv.append($roadmapHeader);
  $roadmapContainerDiv.append($roadmapBodyImg);
  $targetMainContainer.append($roadmapContainerDiv);
}

//TODO(5): WRITE FUNCTION TO CREATE 'FAQ' SECTION
function createFaqSection() {}

//DONE: WRITE FUNCTION TO REMOVE THE CURRENT sub-containers FROM THE MAIN-CONTAINER
function removeContainerFromMain($curContainer) {
  $curContainer.remove();
}

//FUNCTION THAT RETURNS THE CONTAINER THAT THE USER IS CURRENTLY IN
function getCurrentContainer() {
  return $targetMainContainer.children();
}

$homeBtn.on("click", returnToHomeSection);
$aboutBtn.on("click", createAboutSection);
$rarityBtn.on("click", createRaritySection);
$roadmapBtn.on("click", createRoadmapSection);

$(document).ready(function () {
  if (getCurrentContainer().attr("id") === "rarity-container") {
    $targetMainContainer.addClass("rarity-height");
  }
});
