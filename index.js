
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
        
        const check = document.createElement('i')
        check.classList.add("fa-solid", "fa-check");
        todoCard.appendChild(check);

        check.addEventListener('click',()=>{
            todoCard.classList.toggle('todos-completed');
            check.classList.toggle('check--white');
        })
    });
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh > 12){
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();