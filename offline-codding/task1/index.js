const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value
    ? undefined
    : 'Required';

const isEmail = value => value.includes('@')
    ? undefined
    : 'Should be an email';

const onEmailChange = event => {
    const errorText = [isRequired, isEmail]
        .map(validator => validator(event.target.value))
        .filter(errorText => errorText)
        .join(', ');
    emailErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);

const onPasswordChange = event => {
    const errorText = [isRequired]
        .map(validator => validator(event.target.value))
        .filter(errorText => errorText)
        .join(', ');
    passwordErrorElem.textContent = errorText;
}

passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});
    
        alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);