import { querySelectors } from '../query-selectors';
const { btnModal, myModal, modalExit } = querySelectors;
function popup() {
    btnModal?.addEventListener('click', function () {
        myModal?.classList.add('open');
    });
    modalExit?.addEventListener('click', function () {
        myModal?.classList.remove('open');
    });
}
export { popup };
