import { Button } from "./style"

const ButtonPrimary = ({ children, ...rest }) => {
    return(
        <>
          <Button {...rest}>{ children }</Button>
        </>
    )
}
export default ButtonPrimary