const objMessages = JSON.parse(localStorage.getItem('history-message'));
const nameArr = [];
const emailArr = [];
function selectionUserData() {
    if (objMessages) {
        objMessages.forEach(element => {
            nameArr.push(element.user.name);
            emailArr.push(element.user.email);
        });
    }
}
function reduceName() {
    const setName = new Set(nameArr);
    const setNameResult = Array.from(setName);
    return setNameResult;
}
function reduceEmail() {
    const setEmail = new Set(emailArr);
    const setEmailResult = Array.from(setEmail);
    return setEmailResult;
}
export { reduceName, reduceEmail, selectionUserData };
