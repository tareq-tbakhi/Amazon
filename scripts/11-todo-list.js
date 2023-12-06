const todoArray = [];
function addTodo(){
const inputElement = document.querySelector('.js-todo-input')
const inputValue = inputElement.value

todoArray.push(inputValue);
console.log(todoArray);

inputElement.value = '' ;
}