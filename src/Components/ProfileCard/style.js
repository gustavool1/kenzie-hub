import styled from 'styled-components'

export const Container = styled.div`
 width: 360px;
 height: 360px;
 display: flex;
 flex-direction: column;
 
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 110px;
    border-radius: 10px 10px 0px 0px;
    h4, p{
        color: white;
    }
    background-color: var(--primary);
    img{
        width: 80px;
        padding: 10px;
        border-radius: 50%;
    }
`
export const Contacts = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #ffff;
    
    
`
export const PhoneContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 65px;
    background-color: #ECECF7;
    display: flex;
    align-items: center;
    border-radius: 5px;
    svg{
        color: white;
        font-size: 30px;
    }
    div:nth-child(1){
        background-color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        border-radius: 5px;
    }
    div:nth-child(2){
        h4,p{
            margin: 0;
            margin-left: 10px;
            margin-bottom: 8px;
        }
        p{
            color: var(--grey-50);
        }
    }
    div:nth-child(3){
        width: 90%;
        margin: 0 auto;
    }
`

export const EmailContainer = styled.div` 
    margin: 0 auto;
    width: 90%;
    height: 65px;
    background-color: #E6F5EF;
    display: flex;
    align-items: center;
    border-radius: 5px;

    svg{
        color: white;
        font-size: 30px;
    }
    div:nth-child(1){
        background-color: var(--secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        border-radius: 5px;
    }
    div:nth-child(2){
        h4,p{
            margin: 0;
            margin-left: 10px;
            margin-bottom: 8px;
        }
        p{
            color: var(--grey-50);
        }
    }`