import React from 'react'; 
import Searchbar from '../search/searchbar';
import GreetingContainer from '../greeting/greeting_container';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props) 
    }

    render () {
        return (
            <header className="header" id="header">
                <div className="nav-left">
                    <Link to={"/discover"}>Discover</Link>
                    <Link to={"/projects/new"}>Start a project</Link>
                </div>
                <Link to="/">
                    <h1 className="logo">ASCENDER</h1>
                </Link>
                <div className="nav-right">
                    <Searchbar />
                    <GreetingContainer />
                </div>
            </header>
        )
    }
}

export default withRouter(Header); 