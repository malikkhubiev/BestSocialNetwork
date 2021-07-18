import { ProfileType } from './../types/types';
import profileReducer, { actions } from "./profile-reducer"
import users from "../DATA/usersDATA"

test('new user should be the same', () => {
    // test data
    let action = actions.setProfile(users[0] as ProfileType)
    let state = {
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
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.profile).toStrictEqual(users[0])
});