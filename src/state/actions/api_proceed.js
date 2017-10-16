import actionTypes from './actionTypes';
export const docQuerySucceed = (docList) => {
    return {
        type:actionTypes.API_PROCEED.QUERY_PROCEED,
        payload: {docList}
    }
};