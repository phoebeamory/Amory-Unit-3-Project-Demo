/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector('.title')
let storyOpening = document.querySelector('.story-opening')
let buttons = document.querySelector('.buttons')
let optionOne = document.querySelector('.option-one')
let optionTwo = document.querySelector('.option-two')
let optionOneScreen = document.querySelector('.option-one-screen')
let optionTwoScreen = document.querySelector('.option-two-screen')
let optionOneEnd = document.querySelector('.option-one-end')
let optionTwoEnd = document.querySelector('.option-two-end')
let clickOne = document.querySelector('.click-one')
let clickTwo = document.querySelector('.click-two')

optionOne.onclick = function(){
  storyOpening.style.display = 'none'
  buttons.style.display = 'none'
  title.style.display = 'none'
  optionOneScreen.style.display = 'block'
}

optionTwo.onclick = function(){
  storyOpening.style.display = 'none'
  buttons.style.display = 'none'
  title.style.display = 'none'
  optionTwoScreen.style.display = 'block'
}

clickOne.onclick = function(){
  optionOneScreen.style.display = 'none'
  optionOneEnd.style.display= 'block'
}


clickTwo.onclick = function(){
  optionTwoScreen.style.display = 'none'
  optionTwoEnd.style.display= 'block'
}







/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
