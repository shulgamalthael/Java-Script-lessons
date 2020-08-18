const checkbox = document.querySelector('.task-status');

function checker() {
    const getEvent = event.target;
    getEvent.checked ? console.log(true) : console.log(false);
}

checkbox.addEventListener('change', checker);