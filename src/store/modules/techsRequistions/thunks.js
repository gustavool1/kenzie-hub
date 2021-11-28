import { gettingTechs } from "./actions"
import api from '../../../Services'
import { toast } from "react-toastify"
import { gettingUserData } from "../userData/action"

export const gettingTechsThunk = () =>{
    return(dispatch, getStore) =>{
        const { token } = getStore()
        const id = localStorage.getItem("id")
        api
         .get(`/users/${id}`)
          .then((response)=>{
                console.log("response", response)
                dispatch(gettingTechs(response.data.techs)) 
                dispatch(gettingUserData(response.data))
          })
    }
}

export const creatingTechsThunk = (data) =>{
    return(dispatch, getStore)=>{
        toast.configure()
        const { token } = getStore()
        api
         .post("/users/techs", data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
         .then((response)=>{
             dispatch(gettingTechsThunk())
             toast.success("Tecnlogia criada com sucesso")
         })
    }
}