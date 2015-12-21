"use strict"

$(function(){
  console.log('loaded');
	
var shuffle = function () {
    var parent = $('body');
    var divs = $('.card')
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

shuffle()

var clickedCard = '';
var clickCount = 0;
var img1, img2;

var resetCards = function(img1, img2) {
  img1.attr('src', 'img/superhero.png');
  img2.attr('src', 'img/superhero.png');
 }

var clickCard =function (element, clickCount) {
  if (clickCount === 0) {
    img1 = $(element).children('img');
    var alt = $(element).children('img').attr('data-alternateImage');
    clickedCard = alt;
    img1.attr('src',alt)
  } else if (clickCount === 1) {
    img2 = $(element).children('img');
    var alt = $(element).children('img').attr('data-alternateImage');
    img2.attr('src',alt)
    if (clickedCard === alt) {
    } else {
      setTimeout(function() {
        resetCards(img1, img2);
      }, 1000)
    }
  }
}

 $('.card').click(function(){
  if (clickCount === 2) {
      return clickCount = 0;
  }

     clickCard(this, clickCount)
     clickCount++;
});
     clickCard()





  // if (numberofcardsflippedover = 1) {
  //   return "card"
  // }

  // numberofcardsflippedover = 0 

  // if number of cards flipped over > 2 
  // set all the cards imgs to superhero.png IF THEY DONT HAVE THE FOUND CLASS ON THEM. 


  // if numberofcardsflippedover = 1
  //   save that card to "first"
  // if numberofcardsflippedover = 2 
  //   save that card to 'second'

  // compare first and second 
  // if same, add a class called 'found'
    // if not, flip back over to back of card. 


//   $('body').html('<b>Shuffling Deck...</b>')
//   setTimeout(function(){
//    $('#backImage').html(toAppend)
//    }, 1500)
// }) 
  








   });


