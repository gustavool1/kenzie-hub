const userDataReducer = (state = {}, action) =>{
    switch (action.type){
        case "gettingUserData":
            const { userData } = action 
            return userData
        default:
            return state
    }
}
export default userDataReducer