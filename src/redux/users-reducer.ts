import { usersAPI } from '../api/users-api';
import { UserType } from './../types/types';
import { getFriendsThunk } from './navbar-reducer';
import { InferActionsTypes, ThunkType } from './redux-store';

const SET_USERS: string = 'SET-USERS';
const SET_TOTAL_USERS_COUNT: string = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE: string = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING: string = 'TOGGLE-IS-FETCHING';
const SET_FILTER: string = "SET-FILTER";

let initialState = {
    users: [] as Array<UserType> | [],
    totalUsersCount: 0 as number,
    pageSize: 10 as number,
    currentPage: 1 as number,
    isFetching: true,
    filter: {
        term: "",
        friends: null
    } as {
        term: string
        friends: boolean | null
    }
}

export type InitialStateType = typeof initialState;
export type FilterType = InitialStateType["filter"];

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                // @ts-ignore
                users: action.users
            };
        };
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                // @ts-ignore
                totalUsersCount: action.totalCount,
            }
        };
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                // @ts-ignore
                currentPage: action.pageNumber,
            }
        };
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                // @ts-ignore
                isFetching: action.isFetching,
            }
        };
        case SET_FILTER: {
            return {
                ...state,
                // @ts-ignore
                filter: action.filter
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users }as const),
    setCurrentPage: (pageNumber: number) => ({ type: SET_CURRENT_PAGE, pageNumber }as const),
    setTotalUsersCount: (totalCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount }as const),
    setFilter: (filter: FilterType) => ({type: SET_FILTER, filter} as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }as const),
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const getUsers = (pageNumber: number, filter: FilterType | {}):ThunkType<ActionsTypes> => (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let users = usersAPI.getUsers(filter as FilterType);
    dispatch(actions.setUsers(users as Array<UserType>));
    dispatch(actions.setFilter(filter as FilterType));
    if (users) dispatch(actions.setTotalUsersCount(users.length));
    dispatch(actions.setCurrentPage(pageNumber));
    dispatch(actions.toggleIsFetching(false));
}

export const follow = (id: number):ThunkType<ActionsTypes> => (dispatch) => {
    let users = usersAPI.follow(id)
    // navbar
    dispatch(getFriendsThunk())
    // navbar
    dispatch(actions.setUsers(users))
}

export const unFollow = (id: number):ThunkType<ActionsTypes> => (dispatch) => {
    let users = usersAPI.unFollow(id)
    // navbar
    dispatch(getFriendsThunk())
    // navbar
    dispatch(actions.setUsers(users))
}