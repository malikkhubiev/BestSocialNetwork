import { InferActionsTypes, ThunkType } from './redux-store';
import { UserType } from './../types/types'
import { navbarAPI } from '../api/navbar-api';

const SET_FRIENDS = "SET-FRIENDS"

let initialState = {
    friends: [] as Array<UserType> | []
}

export type InitialStateType = typeof initialState;

export const navbarReducer = (state:InitialStateType = initialState, action:ActionsTypes):InitialStateType => {
    switch(action.type){
        case SET_FRIENDS: {
            return{
                friends: action.friends
            }
        }
        default: return state 
    }
}

export const navbarActions = {
    setFriends: (friends: Array<UserType>) => ({type: SET_FRIENDS, friends} as const)
}

export type ActionsTypes = InferActionsTypes<typeof navbarActions>

export const getFriendsThunk = ():ThunkType<ActionsTypes> => (dispatch) => {
    let friends = navbarAPI.getFriends()
    dispatch(navbarActions.setFriends(friends))
}