const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */

const getTaskList = () => {
    fetch(baseUrl)
        .then(response => response.json())
        .then(result => console.log(result));
}

/* getTaskById code here */

const getTaskById = taskId => {
    return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`)
        .then(response => response.json())
        .then(result => console.log(result));
}

getTaskById('1');