// Step 1 Find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");



//Step 2 Write the behaviour
function onAddTaskClicked(event) {
    var taskname = newTaskInput.valuex;
    newTaskInput.value ="";
    todoListContainer.insertAdjacentHTML('afterbegin', taskName);
}

// Step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);