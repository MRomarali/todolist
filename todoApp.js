//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event Listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//functions
function addTodo(event){
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create Li
    const newTodo = document.createElement('li')
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button')
    completedButton.innerText='completed'
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)
      // check trash button
      const trashButton = document.createElement('button')
      trashButton.innerText='x'
      trashButton.classList.add('trash-btn')
      todoDiv.appendChild(trashButton)
      //Append to list
      todoList.appendChild(todoDiv)
      //clear todo input value
      todoInput.value="";
}
function deleteCheck(e) {
   const item = e.target;
   //Delete Todo
   if(item.classList[0]==="trash-btn"){
       const todo=item.parentElement;
       todo.remove();
   }
   if(item.classList[0]==="completed-btn"){
       const todo = item.parentElement;
       todo.classList.toggle("completed")
   }

}
