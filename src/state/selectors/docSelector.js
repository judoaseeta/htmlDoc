import { createSelector } from 'reselect';
export const getDoc = (state) => {
    return {
        content: state.doc.get('content'),
        title: state.doc.get('title'),
        createdAt: state.doc.get('createdAt'),
        lastModified: state.doc.get('lastModified'),
        docId: state.doc.get('docId')
    }
}
const docSelector = () => {
    return createSelector(
        [getDoc],
        doc => doc
    );
}
export default docSelector;