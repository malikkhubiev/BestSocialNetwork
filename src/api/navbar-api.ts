import { users as usersDATA } from './../DATA/usersDATA';
import { UserType } from '../types/types'

export const navbarAPI = {
    getFriends: () => {
        const result:Array<UserType> = []
        usersDATA.map(i=>i.followed?result.push(i):0)
        return result
    }
}