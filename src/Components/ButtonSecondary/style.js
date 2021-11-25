import  styled  from "styled-components"


export const Button = styled.button`
    color: var(--grey-50);
    width: 95%;
    height: 60px;
    border-radius: 5px;
    border: 0px;
    background-color: var(--grey-0);
    cursor: pointer;
    font-size:16px;
    transition: 1s;
    :hover{
        border: 2px solid;
        font-weight: bold;
    }
    a{
        text-decoration:none;
        color: var(--grey-50);
    }
`