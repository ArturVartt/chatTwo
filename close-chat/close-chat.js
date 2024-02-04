import Cookies from 'js-cookie';
function deleteCookie() {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('email');
    Cookies.remove('__cf_bm');
}
function deleteLs() {
    localStorage.clear();
}
export { deleteCookie, deleteLs };
