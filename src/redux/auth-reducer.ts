import { authAPI } from './../api/auth-api';
import { ThunkType, InferActionsTypes } from './redux-store';
import { stopSubmit } from 'redux-form';
import { FormDataType } from '../types/types';

const SET_AUTH_USER_DATA:string = 'SET-AUTH-USER-DATA';
const REM_AUTH_USER_DATA:string = 'REM-AUTH-USER-DATA';
const SET_FIVE:string = 'SET-FIVE';

let initialState = {
    name: null as string | null,
    email: null as string | null,
    password: null as string | null,
    isAuth: false as boolean,
}
export type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                // @ts-ignore
                ...action.data,
                isAuth: true,
            }
        };
        case REM_AUTH_USER_DATA: {
            return {
                ...state,
                isAuth: false,
            }
        };
        case SET_FIVE: {
            return {
                ...state,
                // @ts-ignore
                isAuth: action.num,
            }
        }
        default: {
            return state;
        }
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    setAuthUserData: (data:CredentialsType) => 
        ({ type: SET_AUTH_USER_DATA, data } as const),
    remAuthUserData: () => ({ type: REM_AUTH_USER_DATA } as const ),
}

type CredentialsType = {
    email: string,
    password: string,
    name: string
}
export const LoginSanka = (formData:FormDataType):ThunkType<ActionsTypes> => (dispatch) => {
    let result:boolean | undefined;
    let name:string | undefined;
    function callBack(prom:boolean, userName:string) {
        result = prom;
        name = userName;
    }
    authAPI.logIn(formData, callBack);
    if (result === true) {
        if(typeof name === 'string'){
            let credentials:CredentialsType = {
                email: formData.email,
                password: formData.password,
                name: formData.email
            }
            dispatch(actions.setAuthUserData(credentials));
        }
    } else {
        dispatch(stopSubmit('login', { _error: result }));
    }
}

export const LogoutSanka = ():ThunkType<ActionsTypes> => (dispatch) => {
    dispatch(actions.remAuthUserData());
}