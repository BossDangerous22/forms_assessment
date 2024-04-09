let todos = [];


function renderTodos() {
  const todoList = document.getElementById('todoList');
  
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
  });
}


function handleFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todoInput');
  const newTodo = todoInput.value.trim();
  if (newTodo !== '') {
    todos.push(newTodo);
    renderTodos();
    todoInput.value = ''; 
  }
}

// Add event listener to form submission
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', handleFormSubmit);

