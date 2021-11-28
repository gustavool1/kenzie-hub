import CardTech from '../../Components/CardTech/index.jsx'
import './style.js'
import { useDispatch } from "react-redux"
import { CardTechContainer, Container, InfoTechContainer, TechList, JobTechContainer, InfoJobContainer, JobList, TechModal, JobModal } from './style.js'
import { useEffect, useState } from 'react'
import { gettingTechsThunk } from '../../store/modules/techsRequistions/thunks.js'
import { useSelector } from 'react-redux'
import { gettingJobsThunk } from '../../store/modules/jobsRequisitions/thunks.js'
import FormCreatingJob from '../../Components/FormCreatingJob/index.jsx'
import FormCreatingTech from '../../Components/FormCreatingTech/index.jsx'
import ProfileCard from '../../Components/ProfileCard/index.jsx'
const Dashboard = () =>{
    const dispatch = useDispatch()
    const { techs, jobs} = useSelector(store=>store)
    const [ techModalIsOpen, setTechModalIsOpen ] = useState(false)
    const [ jobModalIsOpen, setjobModalIsOpen ] = useState(false)

    const handleModalTech = () => {
        setTechModalIsOpen(!techModalIsOpen)
    }
    const handleModalJob = () => {
        setjobModalIsOpen(!jobModalIsOpen)
    }
    useEffect(()=>{
        dispatch(gettingTechsThunk())
        dispatch(gettingJobsThunk())
    },[])
    return(
        <Container>
            {techModalIsOpen && <TechModal><FormCreatingTech handleModalTech={handleModalTech}/></TechModal>}
            {jobModalIsOpen && <JobModal><FormCreatingJob handleModalJob={handleModalJob}/></JobModal>}
            <CardTechContainer>
                <InfoTechContainer>
                    <h3>Minhas tecnologias</h3>
                    <div><button onClick={handleModalTech}><span>+</span></button></div>    
                </InfoTechContainer>
                <TechList>
                    {techs.map((tech, key)=><CardTech key={key}tech={tech}/>)}
                </TechList>
            </CardTechContainer>


            <JobTechContainer>
                <InfoJobContainer>
                    <h3>Meus trabalhos</h3>
                    <div><button onClick={handleModalJob}><span>+</span></button></div>    
                </InfoJobContainer>
                <JobList>
                {jobs.map((tech, key)=><CardTech key={key}tech={tech} isTech/>)}
                </JobList>
            </JobTechContainer>
            <ProfileCard/>
        </Container>
    )
}

export default Dashboard