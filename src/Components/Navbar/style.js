import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    img{
        width: 50px;
        margin: 10px;
        border-radius: 50%;
    }
    div{
        margin: 10px;
    }

    @media screen and (max-width:768px){
        width: 100%;
        position: fixed;
    }
`