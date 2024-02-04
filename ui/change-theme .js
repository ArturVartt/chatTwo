import Cookies from 'js-cookie';
const wrapper = document.querySelector('.wrapper');
const wrapperInner = document.querySelector('.wrapper-inner');
const themeOne = document.querySelector('.modal__box-theme-btn');
const btnExit = document.querySelector('.btn__exit');
const themeTwo = document.querySelector('.modal__box-theme-close');
const btnSettings = document.querySelector('.btn__settings');
const formBtn = document.querySelector('.form__btn');
const formBtnInner = document.querySelector('.form__btn-inner');
const userBtn = document.querySelector('.box__users-btn');
// специально оставил тут
function cookiesSet() {
    Cookies.set('theme', 'aqua');
}
function changeTheme() {
    if (Cookies.get('theme')) {
        wrapper?.classList.add('theme-aqua');
        wrapperInner?.classList.add('theme-aqua-inner');
        btnExit?.classList.add('btn__exit-theme-aqua');
        btnSettings?.classList.add('btn__exit-theme-aqua');
        formBtn?.classList.add('btn__exit-theme-aqua');
        formBtnInner?.classList.add('btn__exit-theme-aqua');
        userBtn?.classList.add('btn__exit-theme-aqua');
    }
}
function returnTheme() {
    Cookies.remove('theme');
    wrapper?.classList.remove('theme-aqua');
    wrapperInner?.classList.remove('theme-aqua-inner');
    btnExit?.classList.remove('btn__exit-theme-aqua');
    btnSettings?.classList.remove('btn__exit-theme-aqua');
    formBtn?.classList.remove('btn__exit-theme-aqua');
    formBtnInner?.classList.remove('btn__exit-theme-aqua');
    userBtn?.classList.remove('btn__exit-theme-aqua');
}
themeOne?.addEventListener('click', () => {
    cookiesSet();
    changeTheme();
});
themeTwo?.addEventListener('click', returnTheme);
document.addEventListener('DOMContentLoaded', changeTheme);
