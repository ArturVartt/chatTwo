import { querySelectors } from '../query-selectors';
import { reduceName, reduceEmail, selectionUserData } from './selection-user-data';
const { userBox, amountUsers } = querySelectors;
function renderUsersData() {
    selectionUserData();
    const arrNameResult = reduceName();
    const arrEmailResult = reduceEmail();
    arrNameResult.forEach(element => {
        let userNameSpan = document.createElement('span');
        userNameSpan.classList.add('box__users-name');
        userNameSpan.textContent = element;
        userBox?.append(userNameSpan);
    });
    if (amountUsers) {
        amountUsers.textContent = arrEmailResult.length;
    }
}
export { renderUsersData };
