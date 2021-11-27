import styled from 'styled-components'

export const Container = styled.div`
    width: 500px;
    height: 404px;
    border: 1px solid ;
    display: flex;
    flex-direction: column;
    background-color: white;
`

export const InfoContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
        font-size: 30px;
        cursor: pointer;
    }
    button{
        border: none;
        background-color: transparent;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0px;


`