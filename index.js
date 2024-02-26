
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>{
    return response.json();
}).then( data => {
    console.log(data);
    displayTodos(data);
}).catch(error=> console.log(error));

const todosContainer = document.querySelector('main.todos');

function displayTodos(todos){
    todos.forEach(todo => {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todos-card');
        todoCard.textContent = todo.title;
        todosContainer.appendChild(todoCard);
    });
}