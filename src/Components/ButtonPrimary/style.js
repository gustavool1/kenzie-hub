import  styled  from "styled-components";

export const Button = styled.button`
    color: white;
    width: ${((props)=> props.width)};
    height: 60px;
    border-radius: 5px;
    border: none;
    background-color: var(--primary);
    cursor: pointer;
    transition: 1s;
    font-size: 18px;
    :hover{
        background-color: var(--secondary);
    }
`