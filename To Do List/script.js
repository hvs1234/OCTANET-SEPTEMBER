document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);

            taskInput.value = ""; // Clear the input field
        }
    }

    // Event listener for adding a task
    addTaskButton.addEventListener("click", addTask);

    // Event delegation for deleting a task
    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });

    // Event listener for adding a task when the Enter key is pressed
    taskInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
