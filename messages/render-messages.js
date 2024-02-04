import { querySelectors } from '../query-selectors';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import { getTemplateContent } from '../template-content';
const { ul } = querySelectors;
let writingArr = [0, 20];
function renderMessages() {
    const objMessages = JSON.parse(localStorage.getItem('history-message')); // так и не решил, но теперь войда нет( пудж хукнул
    const objMessagesSlice = objMessages.slice(writingArr[0], writingArr[1]);
    objMessagesSlice.forEach(element => {
        const templateContent = getTemplateContent();
        const timeMessages = format(new Date(element.updatedAt), 'HH:mm');
        if (templateContent.messageInner && templateContent.messageText && templateContent.messageUser && templateContent.messageTime) {
            if (element.user.email === Cookies.get('email') && templateContent.messageInner) {
                templateContent.messageInner.classList.add('user__inner');
                templateContent.messageFrom.classList.add('user');
                templateContent.messageText.textContent = element.text;
                templateContent.messageUser.textContent = 'Я:';
                templateContent.messageTime.textContent = timeMessages;
            }
            else {
                templateContent.messageInner.style.backgroundColor = '#e5d2d2';
                templateContent.messageText.textContent = element.text;
                templateContent.messageUser.textContent = element.user.name + ':';
                templateContent.messageTime.textContent = timeMessages;
            }
            if (ul) {
                ul.prepend(templateContent.li);
            }
        }
    });
    if (ul) {
        ul.scrollTop = ul.scrollHeight;
    }
}
function loadingMessages() {
    if (ul?.scrollTop === 0) {
        writingArr[0] += 20;
        writingArr[1] += 20;
        renderMessages();
    }
}
ul?.addEventListener('scroll', loadingMessages);
export { renderMessages };
