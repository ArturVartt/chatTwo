import { querySelectors } from './query-selectors.js';
import { popup } from './popup/popup-settings.js';
import { cookieSubmit } from './token/cookie.js';
import { changeUserName } from './change-user-name.js';
import { getСode } from './token/send-by-email.js';
import Cookies from 'js-cookie';
import { handelMessageHistory } from './messages/history-message.js';
import { renderUsersData } from './sow-users-chat/render-user-data.js';
import { deleteCookie, deleteLs } from './close-chat/close-chat.js';
const { modal, enterBtn, modalEntry, closeBtnModal, modalForm, authorizationInputForm, userBtn, btn__exit } = querySelectors;
if (Cookies.get('token')) {
    modalEntry?.close();
    modal?.close();
    handelMessageHistory();
}
else {
    modal?.showModal();
}
authorizationInputForm?.addEventListener('submit', event => {
    event.preventDefault();
    getСode();
});
enterBtn?.addEventListener('click', function () {
    modalEntry?.showModal();
});
closeBtnModal?.addEventListener('click', function () {
    modalEntry?.close();
});
modalForm?.addEventListener('submit', changeUserName);
userBtn?.addEventListener('click', renderUsersData);
btn__exit?.addEventListener('click', () => {
    deleteCookie();
    deleteLs();
    location.reload();
});
popup();
cookieSubmit();
