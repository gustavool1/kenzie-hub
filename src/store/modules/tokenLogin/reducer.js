const initialState = JSON.stringify(localStorage.getItem('token')) || ''
const tokenReducer = (state = initialState, action) =>{
    console.log('reducer')
    switch(action.type){
        case "settingToken":
            const { token } = action
            return token
        default:
            return state
    }
}
export default tokenReducer