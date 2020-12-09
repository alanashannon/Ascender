import React from 'react'; 
import { Route, Link, Switch } from 'react-router-dom'; 
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util'; 

const App = () => (
    <div>
        <header>
            <Link to="/">
                <h1>Flying Start</h1>
            </Link>
            <GreetingContainer /> 
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
            //change later: 
            <Route exact path="/" component={SignupFormContainer} />
        </Switch>
    </div>
); 

export default App; 