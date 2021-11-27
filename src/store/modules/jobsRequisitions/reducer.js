export const jobRequisitionsReducer = (state=[], action) =>{
    switch(action.type){
        case "jobs/getJobs":
            const { jobs } = action
            return jobs
        default:
            return state
    }
}