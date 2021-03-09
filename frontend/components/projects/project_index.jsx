import React from 'react'; 
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import FeaturedProject from './featured_project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; 
import FooterContainer from '../footer/footer_container';

class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNum: "1", 
        }

        this.handlePage = this.handlePage.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        this.props.fetchUsers();  
        this.props.fetchCategories();

        let firstPage = document.getElementById("1")
        firstPage.style.fontWeight = "bold" 
    }

    handlePage(e) {
        e.preventDefault(); 
        const clicked = e.target 

        this.setState({
            pageNum: clicked.id, 
        })

        let page1 = document.getElementById("1")
        let page2 = document.getElementById("2")
        let page3 = document.getElementById("3")
        let arrowLeft = document.getElementById("arrow-left")
        let arrowRight = document.getElementById("arrow-right")

        if (clicked.id === "1") {
            page1.style.fontWeight = "bold"
            page2.style.fontWeight = "normal"
            page3.style.fontWeight = "normal"
            arrowLeft.style.color = "gray"
            arrowRight.style.color = "green"
        } else if (clicked.id === "2") {
            page2.style.fontWeight = "bold"
            page1.style.fontWeight = "normal"
            page3.style.fontWeight = "normal"
            arrowLeft.style.color = "green"
            arrowRight.style.color = "green"
        } else if (clicked.id === "3") {
            page3.style.fontWeight = "bold"
            page1.style.fontWeight = "normal"
            page2.style.fontWeight = "normal"
            arrowLeft.style.color = "green"
            arrowRight.style.color = "gray"
        }
    }

    render () {
        const categoriesArr = Object.values(this.props.categories)
        
        // let shuffledArr = [];
        // for (let j = 0; j < this.props.projects.length; j++) {
        //     const k = Math.floor(Math.random() * (this.props.projects.length)); 
        //     if (!shuffledArr.includes(this.props.projects[k])) {
        //         shuffledArr.push(this.props.projects[k])
        //     }
        // }
        // console.log(shuffledArr)
        
        let projectSlice = this.props.projects.slice(((this.state.pageNum - 1) * 4), (this.state.pageNum * 4))
        let result = projectSlice.map((project, i) => {
            return <ProjectIndexItem project={project} users={this.props.users} key={i} />
        })

        return (
            <div>
                <div className="category-bar">
                    <ul>
                        {categoriesArr.map((category, i) => {
                            return (
                                <li key={i} >
                                    <Link className="list-everything" to={`/category/${category.id}`}>{category.category_name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="index-container">
                    <section className="featured-project">
                        <div className="featured-header">Featured Project</div>
                        <FeaturedProject project={this.props.project} users={this.props.users} />
                    </section>

                    <section className="recommended-projects">
                        <div className="recommended-header">Recommended For You</div>
                        <ul>
                            {result}
                            <br />
                        </ul>
                        <div className="pageNum-list">
                            <div className="pageArrow"><IoIosArrowBack size={16} color={"gray"} id="arrow-left"/></div>
                            <div onClick={this.handlePage} className="pageNum" id="1" >1</div>
                            <div onClick={this.handlePage} className="pageNum" id="2" >2</div>
                            <div onClick={this.handlePage} className="pageNum" id="3" >3</div>
                            <div className="pageArrow"><IoIosArrowForward size={16} color={"green"} id="arrow-right"/></div>
                        </div>
                    </section>
                </div>
                <div className="subscribe-container">
                    <h2>Discover the best and brightest projects on Ascender</h2>
                    <p>Sign up to receive our weekly Projects We Love newsletter</p>
                    <button>Subscribe</button>
                </div>
                
                <FooterContainer />
            </div>
        )
    }
}

export default ProjectIndex; 