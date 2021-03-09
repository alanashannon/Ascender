import React from 'react'
import { Link } from 'react-router-dom';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { FaAngellist } from 'react-icons/fa';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <div className="footer-cat-container">
                    {this.props.categories.map((category, i) => {
                        return (
                            <div key={i} className="footer-cat-name">
                                <Link className="list-everything" to={`/category/${category.id}`}>{category.category_name}</Link>
                            </div>
                        )
                    })}
                </div> */}
                <div className="footer-links-container">
                    <div className="footer-about">
                        <h4>ABOUT</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our charter</li>
                            <li>Stats</li>
                            <li>Press</li>
                            <li>Jobs</li>
                        </ul>
                    </div>
                    <div className="footer-support">
                        <h4>SUPPORT</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Our Rules</li>
                            <li>Creator Resources</li>
                            <li>Patrons</li>
                            <li>Brand assets</li>
                        </ul>
                    </div>
                    <div className="footer-more">
                        <h4>MORE FROM KICKSTARTER</h4>
                        <ul>
                            <li>Newsletters</li>
                            <li>Kickstarter Magazine</li>
                            <li>The Creative Independent</li>
                            <li>Mobile apps</li>
                            <li>Research</li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <a href="https://github.com/alanashannon">
                                    <GoMarkGithub size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alana-shannon/">
                                    <GrLinkedin size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://angel.co/u/alana-shannon">
                                    <FaAngellist size={35}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer; 