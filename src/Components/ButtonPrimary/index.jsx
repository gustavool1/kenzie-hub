import { Button } from "./style"

const ButtonPrimary = ({ children, isModal,...rest}) => {
    return(
        <>
          <Button width={isModal? '100%': '95%'} {...rest}>{ children }</Button>
        </>
    )
}
export default ButtonPrimary