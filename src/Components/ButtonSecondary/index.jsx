import { Button } from "./style.js"

const ButtonSecondary = ({ children, ...rest }) => {
    return(
        <>
          <Button {...rest}>{ children }</Button>
        </>
    )
}
export default ButtonSecondary