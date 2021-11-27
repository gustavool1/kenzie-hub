const userTechsReducer = (state = [], action) =>{
    switch(action.type){
        case "techs/getTechs":
            const { techs } = action
            return techs
        default:
            return state
    }
}

export default userTechsReducer