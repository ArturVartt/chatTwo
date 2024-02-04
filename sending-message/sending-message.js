import { getToken } from '../token/cookie';
import { querySelectors } from '../query-selectors';
import { scrollLastElem } from '../popup/scroll-auto';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import { renderMessages } from '../messages/render-messages';
import { handelMessageHistory } from '../messages/history-message';
import { getTemplateContent } from '../template-content';
const { formInput, form, ul } = querySelectors;
const socket = new WebSocket(`wss://edu.strada.one/websockets?${getToken()}`);
socket.onopen = () => {
    renderMessages();
};
function sendDataServer(e) {
    e.preventDefault();
    const inputValue = formInput?.value;
    socket.send(JSON.stringify({ text: inputValue }));
}
socket.onmessage = e => {
    const dataParse = JSON.parse(e.data);
    const templateContent = getTemplateContent();
    const timeMessages = format(new Date(dataParse.createdAt), 'HH:mm');
    if (templateContent.messageInner && templateContent.messageText && templateContent.messageUser && templateContent.messageTime) {
        if (dataParse.user.email === Cookies.get('email')) {
            templateContent.messageInner.classList.add('user__inner');
            templateContent.messageFrom.classList.add('user');
            templateContent.messageUser.textContent = 'Я:';
            templateContent.messageText.textContent = dataParse.text;
            templateContent.messageTime.textContent = timeMessages;
        }
        else {
            templateContent.messageInner.style.backgroundColor = '#e5d2d2';
            templateContent.messageText.textContent = dataParse.text;
            templateContent.messageUser.textContent = dataParse.user.name;
        }
    }
    ul?.append(templateContent.li);
    scrollLastElem();
    handelMessageHistory();
};
form?.addEventListener('submit', e => {
    sendDataServer(e);
    form.reset();
});
