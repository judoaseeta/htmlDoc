import { watchAuthFlow, watchSignIn, watchSignUp, watchSignOut } from './authSaga';
import { watchGetDoc,watchGetDocfromComponent, watchUpdateDoc, watchUploadDoc, watchQueryDocs } from './docSaga';
function* rootSaga () {
    yield [
        watchAuthFlow(),
        watchGetDoc(),
        watchSignIn(),
        watchSignUp(),
        watchSignOut(),
        watchUpdateDoc(),
        watchUploadDoc(),
        watchQueryDocs()
    ]
}
export default rootSaga;