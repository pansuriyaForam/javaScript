const tasks = [];

// Add Task
function addTask(task) {
    tasks.push(task);
    console.log(`Task "${task}" added!`);
}

// Remove Task
function removeTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(`Task "${task}" removed`);
    } else {
        console.log(`Task "${task}" not found`);
    }
}

// view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Your tasks:");
        tasks.forEach((task, i) => 
        console.log(`${i + 1}. ${tasks[i]}`));
    }
}