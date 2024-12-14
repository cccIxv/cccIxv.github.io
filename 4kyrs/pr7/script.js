const addTask = document.getElementById('add-task')
const todoListContainer = document.getElementById('todo-list-container')
const sort = document.getElementById('sort')

const addTaskEvents = (task, taskProps) => {
    const taskBlock = task.querySelector('.task-block')
    const checkbox = taskBlock.querySelector('.checkbox')
    const text = taskBlock.querySelector('.task')
    const deleteButton = taskBlock.querySelector('.delete')
    const input = document.createElement('input')

    const updateText = () => {
        input.value = text.innerText
        input.classList.add('task')
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.value) {
                text.innerText = e.target.value
                taskBlock.replaceChild(text, input)

                taskProps.text = text.innerText
                saveLocalStorage(taskProps)
            }
        })
        taskBlock.replaceChild(input, text)
    }

    const handleCheckbox = () => {
        task.style.backgroundColor = '#f3f3f3'
        text.style.textDecoration = 'line-through'
        task.classList.remove('active')
        task.classList.add('inactive')
        checkbox.remove()
        text.removeEventListener('dblclick', updateText)

        if (taskBlock.contains(input)) taskBlock.replaceChild(text, input)
        taskProps.checkboxState = false
        saveLocalStorage(taskProps)
    }

    if (!taskProps.checkboxState) handleCheckbox()
    else {
        text.addEventListener('dblclick', updateText)
        checkbox.addEventListener('click', () => handleCheckbox())
    }

    deleteButton.addEventListener('click', () => {
        task.remove()
        removeLocalStorage(taskProps)
    })
}

sort.addEventListener('change', (e) => {
    const localStorageTasks = getLocalStorage()
    const fragment = document.createDocumentFragment()

    if (e.target.value === 'Виконаними') {
        localStorageTasks.sort((a, b) => a.checkboxState && !b.checkboxState ? -1 :
            !a.checkboxState && b.checkboxState ? 1 : 0)
    } else if (e.target.value === 'Невиконаними') {
        localStorageTasks.sort((a, b) => !a.checkboxState && b.checkboxState ? -1 :
            a.checkboxState && !b.checkboxState ? 1 : 0)
    }

    for (const task of localStorageTasks) {
        const taskId = document.getElementById(task.newTaskId)
        fragment.appendChild(taskId)
    }

    todoListContainer.appendChild(fragment)
})

const createTask = (newTask, taskProps) => {
    newTask.innerHTML = `
            <div class="task-block task-container" style="background-color: }">
                ${taskProps ? `<input type="checkbox" aria-label="" class="checkbox">` : null}
                <p class="task">${taskProps.text}</p>
                <p>${taskProps.date}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg delete" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
        `
    newTask.id = taskProps.newTaskId
    newTask.classList.add('task-container', taskProps.checkboxState ? 'active' : 'inactive')
    return newTask
}

addTask.addEventListener('keydown', (e) => {
    const addZero = (num) => {
        return num.toString().padStart(2, '0')
    }

    if (e.key === 'Enter' && e.target.value) {
        const newTask = document.createElement('div')
        const date = new Date()
        const formatDate = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear().toString().slice(-2)}, ${addZero(date.getHours())}:${addZero(date.getMinutes())}`

        const taskProps = {
            checkboxState: true,
            text: e.target.value,
            date: formatDate,
            newTaskId: (new Date()).getTime().toString()
        }

        createTask(newTask, taskProps)

        e.target.value = ''
        if (todoListContainer.appendChild(newTask)) addTaskEvents(newTask, taskProps)
        saveLocalStorage(taskProps)
    }
})

const saveLocalStorage = (data) => {
    window.localStorage.setItem(data.newTaskId, JSON.stringify(data))
}

const removeLocalStorage = (data) => {
    window.localStorage.removeItem(data.newTaskId)
}

const getLocalStorage = () => {
    const localStorageTasks = []
    for (let i = 0; i < window.localStorage.length; i++) {
        const value = window.localStorage.getItem(window.localStorage.key(i))
        localStorageTasks.push(JSON.parse(value))
    }

    return localStorageTasks
}

document.addEventListener('DOMContentLoaded', () => {
    const localStorageTasks = getLocalStorage()

    for (let task of localStorageTasks) {
        const newTask = document.createElement('div')
        createTask(newTask, task)
        if (todoListContainer.appendChild(newTask)) addTaskEvents(newTask, task)
    }
})