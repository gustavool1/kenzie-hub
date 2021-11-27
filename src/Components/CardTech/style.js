import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    display: flex;
    height: 77px;
    margin: 10px 0px;
`

export const IconContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 71px;
 height: 77px;
 border-radius: 3px;
 background-color: var(--secondary);
 svg{
        color: white;
        font-size: 30px;
    }
`
export const InfoContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    div{
        background-color: #E6F5EF;
        color: var(--secondary);
        padding: 0 10px;
        border-radius: 5px;
    }
`