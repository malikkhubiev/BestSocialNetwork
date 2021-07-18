import {StateType} from '../../../redux/redux-store';

export const getIsAuth = (state:StateType) => {
    return state.auth.isAuth;
}

export const getUserName = (state:StateType) => {
    return state.auth.name;
}