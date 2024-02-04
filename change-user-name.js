import { querySelectors } from './query-selectors.js';
import { getToken } from './token/cookie.js';
import { URL_USER_DATA } from './data-url.js';
const { modalInputSettings } = querySelectors;
async function changeUserName(event) {
    event.preventDefault();
    const inputValue = modalInputSettings?.value;
    const response = await fetch(URL_USER_DATA, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ name: inputValue }),
    });
    console.log(response.json());
}
export { changeUserName };
