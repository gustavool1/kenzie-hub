import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    display: flex;
    height: 77px;
    margin: 10px 0px;
    border-right: 3px solid var(--grey-0);
    width: 95%;
    transition: 1s;
    :hover{
        border-right: 3px solid ${((props)=> props.border)};
    }
`

export const IconContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 71px;
 height: 77px;
 border-radius: 3px;
 background-color: ${((props)=> props.background)} ;
 transition: 1s;
   
 svg{
        color: ${((props)=> props.color)};
        font-size: 30px;
    }
    
    
`
export const InfoContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    div{
        background-color: ${((props)=>props.background)};
        color: ${((props)=>props.color)};
        padding: 0 10px;
        border-radius: 5px;

        p{
            max-width: 20ch;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
       
    }
   
`