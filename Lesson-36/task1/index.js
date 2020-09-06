const fetchUser = async userTd => {
    try {
        const response = await fetch(`https://api.github.com/users/${userTd}`);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error('Failed to fetch user');
    }
};

fetchUser('facebook')
    .then(userData => console.log(userData))
    .catch(arr => alert(arr.message));

export { fetchUser }; 