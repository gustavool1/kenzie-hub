import { Container, UserInfo, Contacts, PhoneContainer, EmailContainer } from "./style"
import { IoMdPhonePortrait } from "react-icons/io";
import ButtonSecondary from '../ButtonSecondary/index'
import { IoMailOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const ProfileCard = () =>{
    const { user } = useSelector(store=>store)
    return(
        <Container>
            <UserInfo>
                <img src='https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' alt=''/>
                <div>
                    <h4>{user.name}</h4>
                    <p>{user.course_module}</p>
                </div>
            </UserInfo>
            <Contacts>
                <PhoneContainer>
                    <div>
                       <IoMdPhonePortrait/> 
                    </div>
                    <div>
                        <h4>Ligar Agora</h4>
                        <p>{user.contact}</p>
                    </div>
                </PhoneContainer>
                <EmailContainer>
                    <div>
                       <IoMailOutline/> 
                    </div>
                    <div>
                        <h4>Enviar Email</h4>
                        <p>{user.email}</p>
                    </div>
                </EmailContainer>
                    <ButtonSecondary>Sair</ButtonSecondary>
            </Contacts>
        </Container>
    )
}

export default ProfileCard