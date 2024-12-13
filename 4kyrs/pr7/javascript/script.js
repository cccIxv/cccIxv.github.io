document.addEventListener('DOMContentLoaded', function () {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const clearButton = document.getElementById('clear-button');

    // Завантаження даних із LocalStorage при завантаженні сторінки
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <input type="checkbox"${task.completed ? ' checked' : ''}>
            <span>${task.text}</span>
            <span class="timestamp">${task.timestamp}</span>
        `;
        taskList.appendChild(li);
    });

    // Додаємо нове завдання
    newTaskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && newTaskInput.value.trim() !== '') {
            const taskText = newTaskInput.value.trim();
            const date = new Date();
            const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;

            const newTask = {
                text: taskText,
                timestamp: formattedDate,
                completed: false
            };

            savedTasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <span class="timestamp">${formattedDate}</span>
            `;
            taskList.appendChild(li);

            newTaskInput.value = '';
        }
    });

    // Виконання або зняття виконання завдання
    taskList.addEventListener('change', function (e) {
        if (e.target.type === 'checkbox') {
            const li = e.target.parentElement;
            const index = Array.from(taskList.children).indexOf(li);

            // Зміна статусу завдання в LocalStorage
            savedTasks[index].completed = !savedTasks[index].completed;
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            li.classList.toggle('completed');
            e.target.remove();
        }
    });

    // Очистити список та LocalStorage
    clearButton.addEventListener('click', function () {
        localStorage.removeItem('tasks');
        taskList.innerHTML = '';  // Очищаємо список на сторінці
    });
});
