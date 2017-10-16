import actionTypes from './actionTypes';
export const createNewDoc = (title) => {
    return {
        type: actionTypes.API_REQUEST.CREATE_DOC,
        payload : {
            title
        }
    }
}
export const getDoc = (docId) => {
    return {
        type: actionTypes.API_REQUEST.GET_DOC,
        payload: {
            docId
        }
    }
}
export const updateDoc = (doc) => {
    return {
        type: actionTypes.API_REQUEST.UPDATE_DOC,
        payload: {doc}
    }
}
export const queryDocs = () => {
    return {
        type: actionTypes.API_REQUEST.QUERY_DOCS
    }
}
