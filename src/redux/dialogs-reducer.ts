import { usersAPI } from "../api/users-api";
import { UserType } from "../types/types";
import { InferActionsTypes, ThunkType } from "./redux-store";
import { FilterType } from './users-reducer';

const SET_USERS:string = "SET-USERS";

const initialState = {
    users: [] as Array<UserType> | [],
}

type InitialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action:ActionsTypes): InitialStateType => {
    switch(action.type){
        case SET_USERS: {
            return {
                ...state, 
                users: action.users
            };
        };
        default: {
            return state
        }
    }
}

export const actions = {
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>; 

export const getUsers = ():ThunkType<ActionsTypes> => (dispatch) => {
    let users = usersAPI.getUsers({} as FilterType);
    dispatch(actions.setUsers(users as UserType[]));
} 