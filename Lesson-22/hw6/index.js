function hendleClick(event) {
    const getText = event.target;
    console.log(getText.textContent);
};

const setText = document.querySelectorAll('.btn');

setText.forEach(function(btn) {
    btn.addEventListener('click', hendleClick);
});