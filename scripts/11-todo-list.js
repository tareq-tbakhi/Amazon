const todoList = [];

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; // this is called generating the HTML 
    todoListHTML += html;
  }

 // console.log(todoListHTML);

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-todo-input')
  const inputValue = inputElement.value

  todoList.push(inputValue);
  console.log(todoList);

  inputElement.value = '' ;

}