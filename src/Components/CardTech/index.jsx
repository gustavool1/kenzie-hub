import { Container, IconContainer, InfoContainer } from "./style"
import { IoCubeOutline } from "react-icons/io5";
export const CardTech = ({tech}) =>{
    return(
        <Container>
            <IconContainer>
                <IoCubeOutline/>
            </IconContainer>
            <InfoContainer>
                <h4>{tech.title}</h4>
                <div>
                    <p>{tech.status}</p>
                </div>
            </InfoContainer>
        </Container>
    )
}

export default CardTech