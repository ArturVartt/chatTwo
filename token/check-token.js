import { querySelectors } from '../query-selectors';
import { renderMessages } from '../messages/render-messages';
import Cookies from 'js-cookie';
import { URL_USER_ME_DATA } from '../data-url';
import { getMessageHistory, handelMessageHistory } from '../messages/history-message';
const { confirmationInput, modal, modalEntry, confirmationForm } = querySelectors;
async function entryUser() {
    const inputValue = confirmationInput?.value;
    const response = await fetch(URL_USER_ME_DATA, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${inputValue}`,
        },
    });
    return response;
}
async function handlerTokenInput() {
    const response = await entryUser();
    if (response.ok) {
        const data = await response.json();
        const inputValue = confirmationInput?.value;
        Cookies.set('token', inputValue);
        Cookies.set('name', data.name);
        Cookies.set('email', data.email);
        console.log(data);
        modal?.close();
        modalEntry?.close();
        getMessageHistory();
        handelMessageHistory();
        renderMessages();
    }
    else {
        console.log(response.status);
        let errorToken = document.createElement('span');
        errorToken.classList.add('error__token');
        errorToken.textContent = 'ошибка в токене';
        confirmationForm?.append(errorToken);
    }
}
export { handlerTokenInput };
