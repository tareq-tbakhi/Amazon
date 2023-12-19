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


  document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  }); 




function renderTodoList(){

  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
    <div> ${name}</div>
    <div>${dueDate} </div>
    <button class = "delete-todo-button js-delete-todo-button">
      Delete
    </button>
    `; // this is called generating the HTML 
  
    todoListHTML += html;
  });
  

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;



  
// to add an event listener to the delete button i have to write it here
//because i just added the button to the HTML here and before that it was
//only a string

//console.log(document.querySelectorAll('.js-delete-todo-button'));

// i use querySelectorAll to get all the elements in the page that have
//this class instead of only using the first element
//if i console.log querySelectorAll i will notice that it will add the elements
//as an array, each element has its index
//as it is an array i can use for each to loop through it


document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    todoList.splice(index, 1);
    renderTodoList();
  });
});



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
  renderTodoList();
}