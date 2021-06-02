import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import {axios} from "../app/index";
import nomalize from "./../../Utils/normiliseServerResponce";
import NavigationService from '../../Service/navigationService'
import AsyncStorage from "@react-native-community/async-storage"
import {NAV_TYPES} from '../../Navigation/navTypes'
import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
    USER_REGISTER_SMS,
    // SEARCH_PACKAGE,
} from './reducer'

export function* userLogin({payload}){
    try {
        const userLogin = yield call(axios.post, "app/login/seller", payload);
        yield (axios.defaults.headers.common = {
            Authorization: `Bearer ${nomalize(userLogin).token}`
        });
        yield put({
            type: success(USER_LOGIN),
            payload:{
                userLogin:nomalize(userLogin)
            }
        });
        yield call(
            AsyncStorage.setItem,
            "@DataLogin",
            JSON.stringify(userLogin)
        );
        console.log('here');
        yield NavigationService.reset(NAV_TYPES.CORE);
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        console.log('message', parseError);
        yield put({
            type:error(USER_LOGIN),
            payload:{userLoginError:parseError}
        })
    }
}

export function* userLogout(){
    try {
        const userLogout = yield call(axios.post, "app/user/logout");
        console.log('userLogout', nomalize(userLogout));
        yield put({
            type: success(USER_LOGOUT),
            payload:{
                userLogout:nomalize(userLogout)
            }
        })
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        console.log('message', parseError);
        yield put({
            type:error(USER_LOGOUT),
            payload:{userLogoutError:parseError}
        })
    }
}

//USER_REGISTER
export function* userRegister({payload}){
    try {
        const userRegister = yield call(axios.post, "app/login/register", payload);
        yield put({
            type: success(USER_REGISTER),
            payload:{
                userRegister:nomalize(userRegister)
            }
        });
        // yield NavigationService.reset(NAV_TYPES.CORE);
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        console.log('message', parseError);
        yield put({
            type:error(USER_REGISTER),
            payload:{userRegisterError:parseError}
        })
    }
}

//USER_REGISTER_SMS
export function* userGetSMS({payload}){
    try {
        const userGetSMS = yield call(axios.get, "app/login/get-sms/"+payload);
        yield (axios.defaults.headers.common = {
            Authorization: `Bearer ${nomalize(userGetSMS).token}`
        });
        yield put({
            type: success(USER_REGISTER_SMS),
            payload:{
                userGetSMS:nomalize(userGetSMS)
            }
        });
        
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        console.log('message', parseError);
        yield put({
            type:error(USER_REGISTER_SMS),
            payload:{userGetSMSError:parseError}
        })
    }
}


//SEARCH_PACKAGE
// export function* searchPackage({payload}){
//     try {
//         const searchPackage = yield call(axios.post, "app/search/seller/5", payload);
//         yield put({
//             type: success(SEARCH_PACKAGE),
//             payload:{
//                 searchPackage:nomalize(searchPackage)
//             }
//         });
//         // yield NavigationService.reset(NAV_TYPES.CORE);
//     } catch (e) {
//         const parseError = yield JSON.parse(JSON.stringify(e));
//         console.log('message', parseError);
//         yield put({
//             type:error(SEARCH_PACKAGE),
//             payload:{searchPackageError:parseError}
//         })
//     }
// }




export function* userSaga(){
    yield takeLatest(USER_LOGIN,userLogin);
    yield takeLatest(USER_LOGOUT,userLogout);
    yield takeLatest(USER_REGISTER,userRegister);
    yield takeLatest(USER_REGISTER_SMS,userGetSMS);
    // yield takeLatest(SEARCH_PACKAGE,searchPackage);
}