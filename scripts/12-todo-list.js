const todoList = [
  {
  name: 'make dinner',
  dueDate: '2023-12-22'
},
  {
    name:'wash dishes',
    dueDate:'2023-12-22'
  }];

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
    <div> ${name}</div>
    <div>${dueDate} </div>
    <button class = "delete-todo-button" onclick = "
      todoList.splice(${index}, 1);
      renderTodoList();
     ">Delete
    </button>
  
    `; // this is called generating the HTML 
    todoListHTML += html;
  })
  

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name : name,
    // date : dueDate 
    // as a shortcut i can make it like this:
    name,
    dueDate
  });

  inputElement.value = '' ;

}