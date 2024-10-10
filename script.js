const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closebtn');

const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoListContent = document.getElementById('todo-list-content');

hamburger.onclick = function () {
    sidebar.classList.toggle('show');
};

closeBtn.onclick = function () {
    sidebar.classList.remove('show');
};

function addTask() {
    // Get the input value from the text field
    const todoInputValue = todoInput.value.trim();

    // Add the task as dynamic content inside an <li> element
    if (todoInputValue) {
        todoListContent.innerHTML +=
            `<div class="task-container">
                <ul>
                    <li>
                        <h4>Task: ${todoInputValue}</h4>
                    </li>
                </ul>
                <div>
                    <button class="delete-btn" id="delete-btn" >Delete</button>
                    <button class="edit-btn" >Edit</button>
                </div>
            </div> `;
        todoInput.value = ''; // Clear the input after adding
    } else {
        alert("Please enter a task!");
    }

};

addBtn.onclick = addTask;

todoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

todoListContent.addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-btn')) {
        // Delete the task
        event.target.closest('.task-container').remove();
    }
    // Check if the clicked element is an edit button
    if (event.target.classList.contains('edit-btn')) {
        const taskElement = event.target.closest('.task-container').querySelector('h4');
        const newTaskValue = prompt("Edit your task:", taskElement.textContent.replace('Task: ', ''));
        if (newTaskValue) {
            taskElement.textContent = `Task: ${newTaskValue}`;
        }
    }
});

// const hamburger = document.getElementById('hamburger');
// const sidebar = document.getElementById('sidebar');
// const closeBtn = document.getElementById('closebtn');
// const addBtn = document.getElementById('add-btn');
// const todoInput = document.getElementById('todo-input');
// const todoListContent = document.getElementById('todo-list-content');

// hamburger.onclick = function () {
//     sidebar.classList.toggle('show');
// };

// closeBtn.onclick = function () {
//     sidebar.classList.remove('show');
// };

// // Function to add a new task
// function addTask() {
//     // Get the input value from the text field
//     const todoInputValue = todoInput.value.trim();

//     // Add the task as dynamic content inside the todo-list
//     if (todoInputValue) {
//         todoListContent.innerHTML += `
//             <div class="task-container">
//                 <ul>
//                     <li>
//                         <h4>Task: ${todoInputValue}</h4>
//                     </li>
//                 </ul>
//                 <div>
//                     <button class="delete-btn">Delete</button>
//                     <button class="edit-btn">Edit</button>
//                 </div>
//             </div>
//         `;
//         todoInput.value = ''; // Clear the input after adding
//     } else {
//         alert("Please enter a task!");
//     }
// }

// addBtn.onclick = addTask;

// todoInput.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         addTask();
//     }
// });

// // Event delegation for the Delete and Edit buttons
// todoListContent.addEventListener('click', function(event) {
//     // Check if the clicked element is a delete button
//     if (event.target.classList.contains('delete-btn')) {
//         // Delete the task
//         event.target.closest('.task-container').remove();
//     }

//     // Check if the clicked element is an edit button
//     if (event.target.classList.contains('edit-btn')) {
//         const taskElement = event.target.closest('.task-container').querySelector('h4');
//         const newTaskValue = prompt("Edit your task:", taskElement.textContent.replace('Task: ', ''));
//         if (newTaskValue) {
//             taskElement.textContent = `Task: ${newTaskValue}`;
//         }
//     }
// });





