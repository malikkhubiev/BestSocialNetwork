import { StateType } from './../../../redux/redux-store';

export const getAllUsers = (state:StateType) => {
    return state.usersPage.users;
}
export const getTotalUsersCount = (state:StateType) => {
    return state.usersPage.totalUsersCount;
}
export const getPageSize = (state:StateType) => {
    return state.usersPage.pageSize;
}
export const getCurrentPage = (state:StateType) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state:StateType) => {
    return state.usersPage.isFetching;
}
export const getFilter = (state:StateType) => {
    return state.usersPage.filter;
}