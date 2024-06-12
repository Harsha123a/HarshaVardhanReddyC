document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const priorityInput = document.getElementById('priority-input');

    if (taskInput.value === '') return;

    const task = {
        id: Date.now(),
        text: taskInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        completed: false
    };

    addTaskToDOM(task);
    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
}

function addTaskToDOM(task) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
        <span>${task.text} (Due: ${task.dueDate}, Priority: ${task.priority})</span>
        <div>
            <button class="complete-button" onclick="toggleTaskCompletion(${task.id})">Complete</button>
            <button class="edit-button" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
}

function toggleTaskCompletion(id) {
    const taskList = document.getElementById('task-list');
    const taskItem = taskList.querySelector(`[data-id='${id}']`);
    taskItem.classList.toggle('completed');
}

function editTask(id) {
    const taskList = document.getElementById('task-list');
    const taskItem = taskList.querySelector(`[data-id='${id}']`);

    const newText = prompt('Edit task:', taskItem.querySelector('span').textContent.split(' (Due:')[0]);
    if (newText !== null && newText !== '') {
        taskItem.querySelector('span').textContent = newText + taskItem.querySelector('span').textContent.substring(taskItem.querySelector('span').textContent.indexOf(' (Due:'));
    }
}

function deleteTask(id) {
    const taskList = document.getElementById('task-list');
    const taskItem = taskList.querySelector(`[data-id='${id}']`);
    taskItem.remove();
}

function sortTasks(criteria) {
    const taskList = document.getElementById('task-list');
    const tasks = Array.from(taskList.children);

    tasks.sort((a, b) => {
        const taskA = a.querySelector('span').textContent;
        const taskB = b.querySelector('span').textContent;
        
        if (criteria === 'priority') {
            const priorityA = taskA.match(/Priority: (\w+)/)[1];
            const priorityB = taskB.match(/Priority: (\w+)/)[1];
            const priorityOrder = ['low', 'medium', 'high'];
            return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
        } else if (criteria === 'dueDate') {
            const dateA = new Date(taskA.match(/Due: (\S+)/)[1]);
            const dateB = new Date(taskB.match(/Due: (\S+)/)[1]);
            return dateA - dateB;
        } else if (criteria === 'status') {
            return a.classList.contains('completed') - b.classList.contains('completed');
        }
    });

    tasks.forEach(task => taskList.appendChild(task));
}
