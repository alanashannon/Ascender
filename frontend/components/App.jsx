import React from 'react'; 
import { Route, Link, Switch, Redirect } from 'react-router-dom'; 
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import ProjectIndexContainer from './projects/project_index_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectCreateContainer from './projects/project_create_container';
import ProjectEditContainer from './projects/project_edit_container';
import CategoryIndexContainer from './categories/category_index_container';
import CategoryShowContainer from './categories/category_show_container';
import SearchContainer from './search/search_container'; 
import ProfileContainer from './profile/profile_container';
import Header from './header/header';

const App = () => (
    <div>
        <Header />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
            <ProtectedRoute exact path="/projects/new" component={ProjectCreateContainer}/>
            <ProtectedRoute exact path="/projects/:projectId/edit" component={ProjectEditContainer}/>
            <ProtectedRoute exact path="/profile" component={ProfileContainer}/>
            <Route exact path="/projects/:projectId" component={ProjectShowContainer}/>
            <Route exact path="/category/:categoryId" component={CategoryShowContainer}/>
            <Route exact path="/search/:input" component={SearchContainer}/>
            <Route exact path="/discover" component={CategoryIndexContainer}/>
            <Route exact path="/" component={ProjectIndexContainer}/>
            <Redirect to="/"> </Redirect>
        </Switch>
    </div>
); 

export default App; 