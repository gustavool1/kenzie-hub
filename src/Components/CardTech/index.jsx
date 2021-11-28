import { Container, IconContainer, InfoContainer } from "./style"
import { IoCubeOutline, IoGitPullRequestOutline } from "react-icons/io5";
export const CardTech = ({tech, isTech}) =>{
    return(
        <Container border={ !isTech ? '#11995E' : '#403CAA'}>
            <IconContainer background={!isTech ? '#11995E': '#ECECF7'} color={!isTech? '#fff': '#403CAA'}>
                { !isTech ? <IoCubeOutline/>: <IoGitPullRequestOutline/>}
            </IconContainer>
            <InfoContainer background={!isTech ? '#E6F5EF': 'none'} color={!isTech ?'#11995E':'#999999'}>
                <h4>{tech.title}</h4>
                <div>
                    {tech.status ? <p>{tech.status}</p> : <p title={tech.description}>{tech.description}</p> }
                </div>
            </InfoContainer>
        </Container>
    )
}

export default CardTech