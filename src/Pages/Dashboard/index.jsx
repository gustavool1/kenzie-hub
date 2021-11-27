import CardTech from '../../Components/CardTech/index.jsx'
import './style.js'
import { useDispatch } from "react-redux"
import { CardTechContainer, Container, InfoTechContainer, TechList, JobTechContainer, InfoJobContainer, JobList } from './style.js'
import { useEffect } from 'react'
import { gettingTechs } from '../../store/modules/techsRequistions/actions.js'
import { gettingTechsThunk } from '../../store/modules/techsRequistions/thunks.js'
import { useSelector } from 'react-redux'
import { gettingJobs } from '../../store/modules/jobsRequisitions/action.js'
import { gettingJobsThunk } from '../../store/modules/jobsRequisitions/thunks.js'
const Dashboard = () =>{
    const dispatch = useDispatch()
    const { techs, jobs} = useSelector(store=>store)
    useEffect(()=>{
        dispatch(gettingTechsThunk())
        dispatch(gettingJobsThunk())
        console.log('techs',techs)
        console.log('jobs',jobs)

    },[])
    return(
        <Container>
            <CardTechContainer>
                <InfoTechContainer>
                    <h3>Minhas tecnologias</h3>
                    <div><button><span>+</span></button></div>    
                </InfoTechContainer>
                <TechList>
                    {techs.map((tech, key)=><CardTech key={key}tech={tech}/>)}
                </TechList>
            </CardTechContainer>


            <JobTechContainer>
                <InfoJobContainer>
                    <h3>Meus trabalhos</h3>
                    <div><button><span>+</span></button></div>    
                </InfoJobContainer>
                <JobList>
                {jobs.map((tech, key)=><CardTech key={key}tech={tech} isTech/>)}
                </JobList>
            </JobTechContainer>
        </Container>
    )
}

export default Dashboard