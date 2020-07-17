//Selector or Introducing variavle
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todos');
const deleteUserButton = document.getElementById('deleteUser');

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click", filterTodo);
deleteUserButton.addEventListener('click', nameuserDelete);

//Prompt to ask user name
// Declare oUser in the global scope, as an empty object
var oUser = {};
// check for browser support of localStorage
if(typeof(localStorage) == 'undefined') {
    // Check failed, alert user
    alert('Your browser does not support the localStorage method!');
} else {
    // wrapping this in a try...catch block, incase cookies are disabled
    try {
        // Attempt to pull oUser (by key) from localStorage, failure results
        // in oUser being an empty object.
        oUser = JSON.parse(localStorage.getItem('oUser'))||{};
        // Now check if oUser.name is NOT set
        if(!oUser.name) {
            // prompt user for a name
            oUser.name = prompt("Enter Name: ");
            // save oUser in localStorage, stringified
            localStorage.setItem('oUser',JSON.stringify(oUser));
        } else {
            // oUser.name was set, welcome them back 
            msgDisplay.innerText = "Hi " + oUser.name + " Welcome back! ";
        }
    } catch(e) {
        // Cookies are disabled, which threw an error, alert the user
        alert('To use localStorage, you need to enable cookies.');
    }
}

//Function
function addTodo(event){
    //Prevent browser to reloading the page when event take place
    event.preventDefault(); 
    //making the actual todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Making the Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    saveLocalTodos(todoInput.value);//save to local storage
    //Making the check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //Making the trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //clear the input bar text
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //Delete the todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation falldown
        todo.classList.add("fall");
        removeLocalStorage(todo);//removing data from local data stroge
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }
    //Check mark the todo
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("kelar");
    }
}
//Making filter for the list using select
function filterTodo(event){
    const todos = todoList.childNodes; //const todos here grabbing the child in todoList
    todos.forEach(function(todo){   //the argument todo is your div todo
        switch(event.target.value){
            case "all":
                todo.style.display = "flex"
            break;
            case "completed":
                if(todo.classList.contains("kelar")){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none'
                }
            break;
            case "uncompleted":
                if(!todo.classList.contains("kelar")){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
            break;
        }
    });

}

function saveLocalTodos(todo){
    //Check if there is already data 
    let todos;
    if(localStorage.getItem("todos") === null){ //Checking here, if there isnt any data, just making some array here
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos')); // if there is a data, we parses it back and get it from local storage
    }
    todos.push(todo); // new data? Push it back to todos
    localStorage.setItem("todos", JSON.stringify(todos)); //save it and leaeve it
}

function getTodos(){
    //Check if there is already data 
    let todos;
    if(localStorage.getItem("todos") === null){ //Checking here, if there isnt any data, just making some array here
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos')); // if there is a data, we parses it back and get it from local storage
    }
    todos.forEach(function(todo){
        //making the actual todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Making the Li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Making the check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('completed-btn');
        todoDiv.appendChild(completedButton);
        //Making the trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //Append to list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalStorage(todo){
    //Check if there is already data 
    let todos;
    if(localStorage.getItem("todos") === null){ //Checking here, if there isnt any data, just making some array here
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos')); // if there is a data, we parses it back and get it from local storage
    }
    console.log(todo.firstChild.innerText);
    const indexTodo = todo.firstChild.innerText;
    todos.splice(todos.indexOf(indexTodo), 1);
    localStorage.setItem("todos", JSON.stringify(todos)); //save it and leaeve it
}

function nameuserDelete(event){
    localStorage.clear();
    location.reload(true);
}