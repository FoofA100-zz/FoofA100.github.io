"use strict"

   console.log('loaded');

 	var superCards = ["img/Batman.png", "img/BlackW.png", "img/Captain.png", 
 	"img/Flash.png","img/GreenL.png", "img/Hawkeye.png","img/Hulk.png","img/WonderW.png","img/Thor.png","img/Batman.png", 
 	"img/BlackW.png", "img/Captain.png", "img/Flash.png","img/GreenL.png", "img/Hawkeye.png","img/Hulk.png",
 	"img/WonderW.png","img/Thor.png"]

 	var chooseCards = function(){
 		return superCards[Math.floor(Math.random() * 17)];



 	} 	

 	//for (var i = 0; i < superCards.length; i++)


  	var deckCard = function(){
   	$(this).toggleClass('active');

   }

   $('#container').click(deckCard);



   