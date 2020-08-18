const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('change', () => {
    // console.log(checkboxElem.value);
    checkboxElem.checked ? console.log(true) : console.log(false);
});