import { profileAPI } from './../api/profile-api';
import { ThunkType, InferActionsTypes } from './redux-store';
import { ProfileType } from './../types/types';

const SET_PROFILE: string = 'SET_PROFILE';

type InitialStateType = {
    profile: ProfileType
}
let initialState: InitialStateType = {
    profile: {
        id: -1,
        name: "Malik",
        aboutMe: 'Я Front-end разработчик',
        status: "Double click me!",
        lookingForAJob: true,
        isMainUser: true,
        posts: [],
        shouldDialogBoxBeOpened: false
    }
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: {
                    ...action.profile,
                    posts: action.profile.posts,
                },
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setProfile: (profile: ProfileType) => { return {type: SET_PROFILE, profile} as const},
}
type ActionsTypes = InferActionsTypes<typeof actions>;

export const sendMessage = (id: number, message: string): ThunkType<ActionsTypes> => (dispatch) => {
    let profile: ProfileType | undefined = profileAPI.sendMessage(id, message);
    if (profile !== undefined) dispatch(actions.setProfile(profile));
}

export const changeStatus = (status: string): ThunkType<ActionsTypes> => (dispatch) => {
    let profile: ProfileType | undefined = profileAPI.changeStatus(status);
    dispatch(actions.setProfile(profile));
}

export const addPost = (post: string): ThunkType<ActionsTypes> => (dispatch) => {
    let profile: ProfileType | undefined = profileAPI.addPost(post);
    dispatch(actions.setProfile(profile));
}

export const getUser = (userId: number | string): ThunkType<ActionsTypes> => (dispatch) => {
    if (userId === '-1') {
        let profile: ProfileType | undefined = profileAPI.getMainUser();
        dispatch(actions.setProfile(profile));
    } else {
        let profile: ProfileType | undefined = profileAPI.getUser(userId);
        if (profile !== undefined) dispatch(actions.setProfile(profile));
    }
}