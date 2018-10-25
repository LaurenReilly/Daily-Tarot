var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");

var pastContainer = document.querySelector(".pastContainer");
var presentContainer = document.querySelector(".presentContainer");
var futureContainer = document.querySelector(".futureContainer");


//add event listeners for each button and only allow them
//to be clicked one time
past.addEventListener("click", function () {
    var card = randomCard(majorArcana);
    showCard(card, this);
    this.disabled = true;
});
present.addEventListener("click", function () {
    var card = randomCard(majorArcana);
    this.disabled = true;
    showCard(card, this);
});
future.addEventListener("click", function () {
    var card = randomCard(majorArcana);
    this.disabled = true;
    showCard(card, this);
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
    array.splice(i, 1);
    return card;
}

function showCard(card, button) {
    if (button.classList.contains("past")) {
        var content = 
        `
            <div class="image">
                <img src="${card.image}" alt="">
            </div>
            <h3 class="card">${card.name}</h3>
            <div class="text">${card.past}</div>
        `;
    pastContainer.innerHTML = content;
    } else if (button.classList.contains("present")) {
        var content = 
        `
            <div class="image">
                <img src="${card.image}" alt="">
            </div>
            <h3 class="card">${card.name}</h3>
            <div class="text">${card.present}</div>
        `;
        console.log(content);
    presentContainer.innerHTML = content;
    } else if (button.classList.contains("future")) {
        var content = 
        `
            <div class="image">
                <img src="${card.image}" alt="">
            </div>
            <h3 class="card">${card.name}</h3>
            <div class="text">${card.future}</div>
        `;
        console.log(content);
    futureContainer.innerHTML = content;
    }
  
}




// function dealCard() {
//     if (this.classList.contains("past")) {

//     }
// }