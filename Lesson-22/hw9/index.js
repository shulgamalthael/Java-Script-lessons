const btns = document.querySelectorAll('.pagination__page');

function hendleClick(event) {
    const getText = event.target;
    console.log(getText.dataset.pageNumber);
};

btns.forEach(function(btn) {
    btn.addEventListener('click', hendleClick);
});