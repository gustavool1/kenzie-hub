import { toast } from "react-toastify"
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

export const creatingJobThunk = (data) =>{
    return(dispatch, getStore) =>{
        toast.configure()
        console.log('aaa')
        const { token } = getStore() 
        console.log(token)
        api
         .post("/users/works", data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
         })
          .then((response)=>{
              console.log(response)
              dispatch(gettingJobsThunk())
              toast.success("Trabalho criado com sucesso")
          })
    }
}