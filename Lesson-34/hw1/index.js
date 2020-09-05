const baseUrl = 'https://5e9e6e6ffb467500166c3f84.mockapi.io/api/v1/users';

/* getUsersList code here */
const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(result => console.log(result))
};

// getUsersList();

/* getUserById code here */
const getUserById = (userId) => {
    return fetch(`${baseUrl}/${userId}`)
        .then(response => response.json())
        .then(result => console.log(result))
}
// getUserById();

/* createUser code here */
const createUser = data => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};
// createUser();

/* updateUser code here */
const updateUser = (userId, data) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};

/* deleteUser code here */
const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
};

export { getUsersList, getUserById, createUser, updateUser, deleteUser };