import api from "../../Services"
import { settingToken } from "./tokenLogin/action"

export const settingTokenThunk = (data) =>{
    return(dispatch)=>{
        api.post("/sessions", data)
         .then((response)=>{
            console.log(response)
            dispatch(settingToken(response.data.token))
            localStorage.setItem('token', data.token)

        })
    }
}