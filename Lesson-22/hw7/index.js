const textInput = document.querySelector('.text-input');

textInput.addEventListener('change', () => {
    console.log(event.target.value);
})