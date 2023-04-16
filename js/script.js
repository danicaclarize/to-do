// Step 1 Find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML

var showActiveButton = document.getElementById("show-active");



//Step 2 Write the behaviour
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value ="";
    var taskHTML = template.replace("<!-- TASK_NAME-->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function onTodolistClicked(event) {
    /* We need to know which element triggered the click event */
    let targetElement = event.target;

    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }
    let checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}

showActivetasks() {
    
}
  

// Step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListContainerClicked);