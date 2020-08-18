const textInput = document.querySelector('.text-input');

textInput.addEventListener('change', () => {
    const getEvent = event.target;
    console.log(getEvent.value);
})