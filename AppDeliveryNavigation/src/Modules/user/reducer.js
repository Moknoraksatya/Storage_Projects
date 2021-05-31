import { success, error, abort } from "redux-saga-requests";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SMS = 'USER_REGISTER_SMS';

export const userLogin = (payload) =>({
    type: USER_LOGIN,
    payload
});

export const userLogout = () =>({
    type: USER_LOGOUT,
});

export const userRegister = (payload) =>({
    type: USER_REGISTER,
});

export const userGetSMS = () =>({
    type: USER_REGISTER_SMS,
});

const initialState = {
    pending: false,
    error: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    //USER_LOGIN
    case USER_LOGIN:{
        return{...state,pending:true};
    }
    case success(USER_LOGIN):{
        return{
            ...state,
            ...action.payload,
            pending:false};
    }
    case error(USER_LOGIN):{
        return{...state,
            error:true,
            pending:false,
            ...action.payload
        };
    }
    case abort(USER_LOGIN):{
        return{...state,pending:false};
    }
    //USER_LOGOUT
    case USER_LOGOUT:{
        return{...state,pending:true};
    }
    case success(USER_LOGOUT):{
        return{
            ...state,
            ...action.payload,
            pending:false};
    }
    case error(USER_LOGOUT):{
        return{...state,
            error:true,
            pending:false,
            ...action.payload
        };
    }
    case abort(USER_LOGOUT):{
        return{...state,pending:false};
    }

    //USER_REGISTER
    case USER_REGISTER:{
        return{...state,pending:true};
    }
    case success(USER_REGISTER):{
        return{
            ...state,
            ...action.payload,
            pending:false};
    }
    case error(USER_REGISTER):{
        return{...state,
            error:true,
            pending:false,
            ...action.payload
        };
    }
    case abort(USER_REGISTER):{
        return{...state,pending:false};
    }

    //USER_REGISTER_SMS
    case USER_REGISTER_SMS:{
        return{...state,pending:true};
    }
    case success(USER_REGISTER_SMS):{
        return{
            ...state,
            ...action.payload,
            pending:false};
    }
    case error(USER_REGISTER_SMS):{
        return{...state,
            error:true,
            pending:false,
            ...action.payload
        };
    }
    case abort(USER_REGISTER_SMS):{
        return{...state,pending:false};
    }

    /**
     * DEFAULT_CASE
     */
    default:
        return state;
    }
};
export default userReducer;