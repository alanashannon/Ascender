import React from 'react'; 
import { Route, Link, Switch, Redirect } from 'react-router-dom'; 
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import ProjectIndexContainer from './projects/project_index_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectCreateContainer from './projects/project_create_container';

const App = () => (
    <div>
        <header className="header">
            <a href="#">Explore</a>
            {/* <a href="#">Start a project</a> */}
            <Link to={"/projects/start"}>Start a project</Link>
            <Link to="/">
                <h1 className="logo">ASCENDER</h1>
            </Link>
            <a href="#">Search</a>
            <GreetingContainer /> 
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
            <ProtectedRoute exact path="/projects/start" component={ProjectCreateContainer}/>
            <Route exact path="/projects/:projectId" component={ProjectShowContainer}/>
            <Route exact path="/" component={ProjectIndexContainer}/>
            <Redirect to="/"> </Redirect>
        </Switch>
    </div>
); 

export default App; 