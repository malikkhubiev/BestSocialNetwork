import authReducer, { actions } from "./auth-reducer"

let state = {
    name: null,
    login: null,
    password: null,
    isAuth: false,
}
let data = {
    login: "",
    password: "",
    name: ""
}
test("is Auth should be 'true'", ()=>{
    // 1. data
    let action = actions.setAuthUserData(data)
    // 2. action
    let newState = authReducer(state, action)
    // 3. expectation
    expect(newState.isAuth).toBe(true)
})
let fiveAction = (num:number) => ({type: "SET-FIVE", num})
test("is Auth should be 'true'", ()=>{
    // 1. data
    let action = fiveAction(5)
    // 2. action
    let newState = authReducer(state, action)
    // 3. expectation
    expect(newState.isAuth).toBe(5)
})