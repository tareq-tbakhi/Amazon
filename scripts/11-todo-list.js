const todoList = [
  {
  name: 'make dinner',
  dueDate: '2023-12-22'
},
  {
    name:'make dinner',
    dueDate:'2023-12-22'
  }];

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;

    const html = 
    `<p>
      ${name} ${dueDate} 
      <button onclick = "
      todoList.splice(${i}, 1);
      renderTodoList();
      ">Delete</button>
    </p>`; // this is called generating the HTML 
    todoListHTML += html;
  }

 console.log(todoListHTML);

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-todo-input')
  const name = inputElement.value

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    // name : name,
    // date : dueDate
    // as a shortcut i can make it like this:
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = '' ;

}