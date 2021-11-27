import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--grey-0);
    
`

export const CardTechContainer = styled.div`
    width: 450px;
    height: 560px;
    background-color: white;
`

export const InfoTechContainer = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 43px;
        padding: 0px;
        height: 34px;
        color: white;
        border-radius: 3px;
        background-color: var(--secondary);
        transition: 1s;
        button{
            border: 0px;
            background-color: transparent;
            color: white;
            cursor: pointer;
        }
        span{
            font-size: 30px;
        }

        :hover{
            background-color: var(--primary);
        }
    }
`

export const TechList = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 500px;
    overflow: auto;
`