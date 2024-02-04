import { querySelectors } from './query-selectors';
const { template } = querySelectors;
function getTemplateContent() {
    const li = template?.content.cloneNode(true);
    const messageFrom = li.querySelector('.message__send-from');
    const messageInner = li.querySelector('.message__inner');
    const messageUser = li.querySelector('.message__user');
    const messageText = li.querySelector('.message__text');
    const messageTime = li.querySelector('.message__time');
    return {
        template,
        li,
        messageText,
        messageTime,
        messageUser,
        messageFrom,
        messageInner,
    };
}
export { getTemplateContent };
