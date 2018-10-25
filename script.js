var past = document.getElementById("past");
var present = document.getElementById("present");
var future = document.getElementById("future");

var pastContainer = document.querySelector(".pastContainer");
var presentContainer = document.querySelector(".presentContainer");
var futureContainer = document.querySelector(".futureContainer");


//add event listeners for each button and only allow them
//to be clicked one time
past.addEventListener("click", function () {
    randomCard(majorArcana);
    this.disabled = true;
});
present.addEventListener("click", function () {
    randomCard(majorArcana);
    this.disabled = true;
});
future.addEventListener("click", function () {
    randomCard(majorArcana);
    this.disabled = true;
});

//choose a random card from the deck
//removes card from the deck after being drawn
function randomCard(array) {
    var i = getRandom(0, array.length);
    function getRandom(min, max) {
        var index = Math.floor(Math.random() * (max - min)) + min;
        return index; 
      }
    var card = array[i];
    showCard(card);
    array.splice(i, 1);
}

function showCard(card) {

}


// function dealCard() {
//     if (this.classList.contains("past")) {

//     }
// }