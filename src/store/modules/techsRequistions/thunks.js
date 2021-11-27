import { gettingTechs } from "./actions"
import api from '../../../Services'
import axios from 'axios'
export const gettingTechsThunk = () =>{
    return(dispatch, getStore) =>{
        const { token } = getStore()
        const id = localStorage.getItem("id")
        api
         .get(`/users/${id}`)
          .then((response)=>{
                console.log("response", response)
                dispatch(gettingTechs(response.data.techs))
          })
    }
}