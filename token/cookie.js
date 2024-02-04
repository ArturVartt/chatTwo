import { querySelectors } from '../query-selectors';
import Cookies from 'js-cookie';
import { handlerTokenInput } from './check-token';
const { confirmationForm } = querySelectors;
export function getToken() {
    return Cookies.get('token');
}
export function cookieSubmit() {
    confirmationForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        handlerTokenInput();
    });
}
