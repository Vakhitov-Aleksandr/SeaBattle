var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: ["10", "20", "30"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: ["", "", ""] },
    { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
  ],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      locations = ship.locations;
      var index = locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if(this.isSunk(ship)){
          view.displayMessage("You sank my batteship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed!");
    return false;
  },
  isSunk: function(ship){
    for(var i = 0; i < this.shipLength; i++){
      if(ship.hits[i] !== "hit"){
        return false;
      }
    }
  }
};

var controller = {
  guesses: 0,
   processGuess: function(guess){

   }
}

function parseGuess(guess){
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if(guess === null || guess.length !== 2){
    alert("Oops!");
  } else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
  }
}
// model.fire("10");
// model.fire("20");
// model.fire("30");
// model.fire("32");
// model.fire("33");
// model.fire("34");
// model.fire("44");
// model.fire("12");
// model.fire("11");
// model.fire("10");

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("hello");

// var model = {
//   boardSize: 7,
//   numShips: 3,
//   shipLength: 3,
//   shipsSunk: 0,

//   ships: [
//     {location: ["06", "16", "26"], hits: ["", "", ""]},
//     {location: ["24", "34", "44"], hits: ["", "", ""]},
//     {location: ["10", "11", "12"], hits: ["", "", ""]}
//   ],

//   fire: function(guess){
//     for(var i = 0; i < this.numShips; i++){
//       var ship = this.ships[i];
//       var locations = ship.locations;
//       var index = locations.indexOf(guess);
//       if(index >= 0){
//         ship.hits[index] = "hit";
//         view.displayHit(guess);
//         view.displayMessage("HIT!");
//         if(this.shipsSunk(ship)){
//           view.displayMessage("You sank my battleship!");
//           this.shipsSunk++;
//         }
//         return true;
//       }
//     }
//     view.displayMiss(guess);
//     view.displayMessage("You missed.");
//     return false;
//   },

//   isSunk: function(ship){
//     for(var i = 0; i < this.shipLength; i++){
//       if(ship.hits[i] !== "hit"){
//         return false;
//       }
//     }
//     return true;
//   }
// };

// model.fire("53");

// model.fire("06");
// model.fire("16");
// model.fire("26");

// model.fire("34");
// model.fire("24");
// model.fire("44");

// model.fire("12");
// model.fire("11");
// model.fire("10");


