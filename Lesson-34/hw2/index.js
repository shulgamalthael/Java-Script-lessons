// =========================================================================

const submitBtn = document.querySelector('.submit-button');
const getFormData = document.querySelector('.login-form');
const errorText = document.querySelector('.error-text');

console.log(errorText)
console.log(getFormData)

const userUrl = 'https://5e9e6e6ffb467500166c3f84.mockapi.io/api/v1/users';


const changeStatusBtn = () => {
    if (getFormData.reportValidity()) {
        submitBtn.disabled = false;
    }
};

// console.log(changeStatusBtn())

getFormData.addEventListener('input', changeStatusBtn);

// const clearForm = getFormData.value

const getResult = (e) => {
    e.preventDefault();
    const myFormDataOnPage = [...new FormData(getFormData)]
        .reduce((acc, arr) => ({ ...acc, [arr[0]]: arr[1] }), {});

    postDataUser(myFormDataOnPage)
        .then(response => response.json())
        .then(addDataUser => {
            alert(JSON.stringify(addDataUser));
            submitBtn.disabled = true;
            getFormData.reset();
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
            submitBtn.disabled = true;
            // getFormData = '';
        });

    console.log(myFormDataOnPage)
};

const postDataUser = addDataUser => {
    console.log(addDataUser)
    return fetch(userUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(addDataUser)
    })
};




getFormData.addEventListener('submit', getResult);
