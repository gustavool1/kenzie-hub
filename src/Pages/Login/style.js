import styled from "styled-components";

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid var(--grey-50) ;
    border-radius: 5px;
    box-shadow:2px 2px  var(--grey-0);
    padding: 20px;
    width: 85%;
    max-width: 500px;
    p{
        width: 80%;
        color: var(--grey-50);
    }
    
`