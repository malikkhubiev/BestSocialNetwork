import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        navbarPage: {
            friends: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Zabit" },
                { id: 3, name: "Khabib" }
            ]
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi!", likes: 5 },
                { id: 2, message: "Hey, i'm fine, how are you?", likes: 7 },
                { id: 3, message: "I'm fine too, nice to meet you", likes: 2 },
                { id: 4, message: ";)", likes: 500 },
                { id: 5, message: "React is so much interesting!", likes: 52 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Artem' },
                { id: 2, name: 'Zabit' },
                { id: 3, name: 'Messi' },
                { id: 4, name: 'Siera' },
                { id: 5, name: 'Zhois' },
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'Good architecture :)' },
                { id: 3, message: 'Have a good day)' },
                { id: 4, message: '#WhatMeansHashTag?' },
                { id: 5, message: 'New Website!!!' },
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber: 0,

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;