import { StateType } from "../../../redux/redux-store";

export const getFriends = (state:StateType) => {
    return state.navbarPage.friends
}