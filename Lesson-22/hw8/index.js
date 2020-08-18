const checkBox = document.querySelector('.task-status');

const foo = (event) => {
    const getEvent = event.target;
    if (getEvent.checked) {
        console.log(true);
    } else {
        console.log(false);
    }
};

checkBox.addEventListener('change', foo);