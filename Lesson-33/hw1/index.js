const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(result => console.log(result));
};

/* getTaskById code here */

function getTaskById(tasksId) {
    // const { id } = baseUrl;
    return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${tasksId}`)
        .then(response => response.json())
        .then(result => console.log(result))
};

// getTaskById(2);

export { getTasksList, getTaskById };