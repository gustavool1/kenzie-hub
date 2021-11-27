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
 background-color: ${((props)=> props.background)} ;
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
            max-width: 25ch;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
`