import actionTypes from './actionTypes';
export const SetDocRequest = (docId) => {
    return {
        type: actionTypes.DOC_CONTROL.SET_DOC_REQUEST,
        payload : {
            docId
        }
    }
}
export const SetDoc = (doc) => {
    return {
        type: actionTypes.DOC_CONTROL.SET_DOC,
        payload: {
            doc
        }
    }
}
export const SetContent = (content) => {
    return {
        type: actionTypes.DOC_CONTROL.SET_CONTENT,
        payload: {
            content
        }
    }
}
export const SetTitle = (title) => {
    return {
        type: actionTypes.DOC_CONTROL.SET_TITLE,
        payload: {
            title
        }
    }
}