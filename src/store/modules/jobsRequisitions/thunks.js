import api from "../../../Services"
import { gettingJobs } from "./action"

export const gettingJobsThunk = () =>{
    return(dispatch, getStore)=>{
        const id = localStorage.getItem("id")
        api
         .get(`/users/${id}`)
          .then((response)=>{
                dispatch(gettingJobs(response.data.works))
          })
    }
}