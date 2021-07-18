// Profile-reducer
export type mainUserType = {
    id: number
    name: string
    aboutMe: string
    status: string
    lookingForAJob: boolean
    isMainUser: boolean
    posts: Array<PostType>
    shouldDialogBoxBeOpened: boolean
}
export type ProfileType = {
    id: number
    name: string
    aboutMe: string
    status: string
    lookingForAJob: boolean
    isMainUser: boolean
    posts: Array<PostType> | []
    messages?: Array<MessageType>
    shouldDialogBoxBeOpened: boolean
    followed?: boolean
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likes: number
}
// Navbar-reducer
export type FriendsType = {
    id: number
    name: string
}
// Users-reducer
export type UserType = {
    id: number
    name: string
    aboutMe: string
    status: string
    lookingForAJob: boolean
    followed: boolean
    posts: Array<PostType>
    messages: Array<MessageType>
    isMainUser: boolean
}
// Auth-reducer
export type FormDataType = {
    email: string
    password: string
}