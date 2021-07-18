import { actions, follow, unFollow } from './users-reducer';
import { usersAPI } from './../api/users-api';
import usersReducer from './users-reducer';

let state = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
}
let id = 1;
let dispatch:any;
let getState:any;

beforeEach(()=>{
    dispatch = jest.fn();
    getState = jest.fn();
});
afterEach(()=>{
    dispatch.mockClear();
    getState.mockClear();
})

describe("testing follow/unfollow reducer tasks", ()=>{
    it("user must be followed", ()=>{
        let users = usersAPI.follow(id);
        let action = actions.setUsers(users)
        let newState = usersReducer(state, action);
        expect(newState.users[id].followed).toBe(true);
    });
    it("user must be unfollowed", ()=>{
        let users = usersAPI.unFollow(id);
        let action = actions.setUsers(users)
        let newState = usersReducer(state, action);
        expect(newState.users[id].followed).toBe(false);
    });
    it("how many times dispatched", ()=>{
        // Mock
        // Calling Thunk creator
        let myThunk = follow(id);
        myThunk(dispatch, getState, {});
        // Expecting
        expect(dispatch).toBeCalledTimes(1);
    });
    it("how many times dispatched", ()=>{
        // Mock
        // Calling Thunk creator
        let myThunk = unFollow(id);
        myThunk(dispatch, getState, {});
        // Expecting
        expect(dispatch).toBeCalledTimes(1);
    });
})
