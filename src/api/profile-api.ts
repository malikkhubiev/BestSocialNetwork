import { users as usersData } from './../DATA/usersDATA';
import { mainUser } from './../DATA/usersDATA';

export const profileAPI = {
    addPost(postMessage: string) {
        let message = postMessage;
        let id = mainUser.posts.length;
        mainUser.posts = [...mainUser.posts, { id, message, likes: 100 }];
        return mainUser;
    },
    changeStatus(status: string) {
        mainUser.status = status;
        return mainUser;
    },
    getUser(userId: number | string) {
        let profile;
        usersData.map(user => {
            if (user.id === +userId) profile = user;
        });
        return profile;
    },
    getMainUser() {
        return mainUser;
    },
    sendMessage(id: number, sendedMessage: string) {
        let searchedUser;
        usersData.map(user => {
            if (user.id === id) {
                user.messages.push({ id: user.messages.length, message: sendedMessage });
                searchedUser = user;
            }
        });
        return searchedUser;
    }
}