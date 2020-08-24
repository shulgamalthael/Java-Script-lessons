localStorage.clear();
localStorage.setItem('hobies', JSON.stringify({name: 'Tom'}));
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify('17'));

const getLocalStorageDate = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            return {
                ...acc,
                [key]: value,
            }
        }, {});
};

console.log(getLocalStorageDate());