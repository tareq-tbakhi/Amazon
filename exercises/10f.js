function checkButton(selector){
  const buttonElement = document.querySelector(selector);
  if(!buttonElement.classList.contains('is-toggled')){
    turnOffOther();
    buttonElement.classList.add('is-toggled');
  }else{
    buttonElement.classList.remove('is-toggled');
  }
}

function turnOffOther(){
  const otherButton = document.querySelector('.is-toggled');
  if(otherButton){
    otherButton.classList.remove('is-toggled');
  }
}
