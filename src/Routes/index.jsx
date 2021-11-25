
import { Switch, Route } from "react-router-dom";
const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/login'>
                Login
            </Route>
            <Route exact path='/register'>
                Register
            </Route>
        </Switch>
    )
}

export default Routes