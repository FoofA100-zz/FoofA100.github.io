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




// $('.card').html('<b>Shuffling Deck...</b>')
//   setTimeout(function(){
// $('.card').html(toAppend)
// }, 1500)
// }) 

//shuffleArray(superCards);


  

$('.card').click(function(){
  var img = $(this).children('img')
  var alt = $(this).children('img').attr('data-alternateImage')
  img.attr('src',alt)
  
  
  // var numberofcardsflippedover = 0

  // cardsflippedover function(){
  //   if (numberofcardsflippedover > 2) {
  //     return "superhero.png" = 'card'
  //   }

  // }

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

});









    });


