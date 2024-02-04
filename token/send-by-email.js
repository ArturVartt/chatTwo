import { querySelectors } from "../query-selectors";
import { URL_USER_DATA } from "../data-url";
const { authorizationInput } = querySelectors;
async function getСode() {
    const inputValue = authorizationInput?.value;
    const response = await fetch(URL_USER_DATA, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email: inputValue }),
    });
    const responseObj = response.json();
    console.log(responseObj);
}
export { getСode };
