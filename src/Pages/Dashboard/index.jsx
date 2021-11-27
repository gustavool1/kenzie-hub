import CardTech from '../../Components/CardTech/index.jsx'
import './style.js'
import { useDispatch } from "react-redux"
import { CardTechContainer, Container, InfoTechContainer, TechList } from './style.js'
import { useEffect } from 'react'
import { gettingTechs } from '../../store/modules/techsRequistions/actions.js'
import { gettingTechsThunk } from '../../store/modules/techsRequistions/thunks.js'
import { useSelector } from 'react-redux'
const Dashboard = () =>{
    const dispatch = useDispatch()
    const { techs } = useSelector(store=>store)
    
    useEffect(()=>{
        dispatch(gettingTechsThunk())
    console.log('techs',techs)

    },[])
    return(
        <Container>
            <CardTechContainer>
                <InfoTechContainer>
                    <h3>Minhas tecnologias</h3>
                    <div><button><span>+</span></button></div>    
                </InfoTechContainer>
                <TechList>
                    {techs.map((tech)=><CardTech tech={tech}/>)}
                </TechList>
            </CardTechContainer>
        </Container>
    )
}

export default Dashboard