
  var superCards = [{heroName:"Batman", imgUrl: "img/Batman.png"},
                    {heroName:"BlackW", imgUrl: "img/BlackW.png"},
                    {heroName:"Captain", imgUrl: "img/Captain.png"},
                    {heroName:"Flash", imgUrl: "img/Flash.png"},
                    {heroName:"GreenL", imgUrl: "img/GreenL.png"},
                    {heroName:"Hawkeye", imgUrl: "img/Hawkeye.png"},
                    {heroName:"Hulk", imgUrl: "img/Hulk.png"},
                    {heroName:"WonderW", imgUrl: "img/WonderW.png"},
                    {heroName:"Thor", imgUrl: "img/Thor.png"},
                    {heroName:"Batman", imgUrl: "img/Batman.png"},
                    {heroName:"BlackW", imgUrl: "img/BlackW.png"},
                    {heroName:"Captain", imgUrl: "img/Captain.png"},
                    {heroName:"Flash", imgUrl: "img/Flash.png"},
                    {heroName:"GreenL", imgUrl: "img/GreenL.png"},
                    {heroName:"Hawkeye", imgUrl: "img/Hawkeye.png"},
                    {heroName:"Hulk", imgUrl: "img/Hulk.png"},
                    {heroName:"WonderW", imgUrl: "img/WonderW.png"},
                    {heroName:"Thor", imgUrl: "img/Thor.png"},
                    

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    displayCards(array)
    return array;
}
function displayCards(arr){
  // you need 2 of these. this string is going to make that way difficult.
	// you might want to switch to the other way, that'll make getting 2 of them easier. 
  var toAppend = [];

	arr.forEach(function(card){
  toAppend += $("<img class='"+card.Batman+" resize' src='"+card.imgUrl+"'img/Batman.png/>");
	toAppend += $("<img class='"+card.heroName+" resize' src='"+card.imgUrl+"'/>");
	//})

  // right here, you need to retrieve and store the position of each superhero pair
  // if $(".Batman").each.hasClass("toggled") == true (BAD SYNTAX),
  // remove them, score up by 1

  // getting object.keys(each item in super cards) by using a loop through the whole superCards array


	$('#container').html('<b>Shuffling Deck...</b>')
	setTimeout(function(){
    // this is where you'd need to redo it with simpler jQuery
    $('#container').html(toAppend)
	}, 1500)
}

shuffleArray(superCards);  


  $('#container').click(function() {
   $(this).toggleClass('active');
    console.log("Handler for .click() called.");
  });


})
