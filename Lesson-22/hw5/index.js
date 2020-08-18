const onceClick = document.querySelector('.single-use-btn');

function clicker() {
    console.log('clicked');
    onceClick.removeEventListener('click', clicker, false);
}

onceClick.addEventListener('click', clicker);