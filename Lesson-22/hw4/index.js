const inputValue = document.querySelector('.search__input');

const btn = document.querySelector('.search__btn')
    
btn.addEventListener(`click`, () => {
        console.log(inputValue.value);
    });