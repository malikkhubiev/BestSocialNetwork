import { authReducer } from './auth-reducer';
import { navbarReducer } from './navbar-reducer';
import { profileReducer } from './profile-reducer';
import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { ThunkAction } from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { dialogsReducer } from './dialogs-reducer';
import { usersReducer } from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

type ReducersType = typeof reducers;
export type StateType = ReturnType<ReducersType>;

export type InferActionsTypes<T> = T extends {[key: string]: (...args:any[]) => infer U}?U:never;

export type ThunkType<AT extends Action<any>> = ThunkAction<void, StateType, unknown, AT>;
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export type StoreType = typeof store;

export default store;