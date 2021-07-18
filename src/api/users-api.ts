import { FilterType } from './../redux/users-reducer';
import { users as usersData } from './../DATA/usersDATA';
import { UserType } from '../types/types';

export const usersAPI = {
    getUsers(filter: FilterType) {
        let firstResultArray: Array<UserType> = [];
        let result: Array<UserType> = [];
        if(filter.friends !== null && filter.friends !== undefined || filter.term !== "" && filter.term !== undefined){
            if(filter.friends !== null && filter.friends !== undefined && filter.term !== undefined && filter.term !== ""){
                usersData.map(user => user.followed === filter.friends ? firstResultArray.push(user) : 0)
                firstResultArray.map(user => {
                    if (user.name.includes(filter.term.toUpperCase()) || user.name.includes(filter.term.toLowerCase())) result.push(user)
                })
                return result
            }else if(filter.friends !== null && filter.friends !== undefined){
                usersData.map(user => user.followed === filter.friends ? result.push(user) : 0)
                return result
            }else{
                usersData.map(user => {
                    if (user.name.includes(filter.term.toUpperCase()) || user.name.includes(filter.term.toLowerCase())) result.push(user)
                })
                return result
            }
        } else {
            return usersData
        }
    },
    follow(followedUserId: number) {
        usersData.map(user => user.id === followedUserId ? user.followed = true : 0);
        return usersData;
    },
    unFollow(followedUserId: number) {
        usersData.map(user => user.id === followedUserId ? user.followed = false : 0);
        return usersData;
    }
}