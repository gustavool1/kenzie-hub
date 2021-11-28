import { Button, Container } from "./style.js"

const ButtonSecondary = ({ children, ...rest }) => {
    return(
        <>
          <Container>
            <Button {...rest}>{ children }</Button>
          </Container>
        </>
    )
}
export default ButtonSecondary