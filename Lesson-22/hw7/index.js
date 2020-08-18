const getInputValue = document.querySelector('.text-input');

const foo = (event) => {
    const getEvent = event.target;
    console.log(getEvent.value)
}

getInputValue.addEventListener('change', foo);