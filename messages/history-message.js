import { getToken } from '../token/cookie';
import { URL_MESSAGE_DATA } from '../data-url';
async function getMessageHistory() {
    const response = await fetch(URL_MESSAGE_DATA, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response;
}
async function handelMessageHistory() {
    const response = await getMessageHistory();
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('history-message', JSON.stringify(data.messages));
    }
    else {
        console.log(response.status);
    }
}
export { handelMessageHistory, getMessageHistory };
