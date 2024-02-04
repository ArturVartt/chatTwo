import { querySelectors } from '../query-selectors.js';
const { ul } = querySelectors;
function scrollLastElem() {
    const lastElement = ul?.lastElementChild;
    if (lastElement !== null) {
        lastElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
}
export { scrollLastElem };
