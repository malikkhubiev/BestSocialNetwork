import { StateType } from './../../../redux/redux-store';

export const getProfile = (state:StateType) => {
    return state.profilePage.profile
}

export const getStatus = (state:StateType) => {
    return state.profilePage.profile.status
}

export const getUserId = (state:StateType) => {
    return state.profilePage.profile.id
}

export const getShouldBe = (state:StateType) => {
    return state.profilePage.profile.shouldDialogBoxBeOpened
}

export const getMessages = (state:StateType) => {
    return state.profilePage.profile.messages
}

export const getPosts = (state: StateType) => {
    return state.profilePage.profile.posts
}

export const getIsMainUser = (state: StateType) => {
    return state.profilePage.profile.isMainUser
}
