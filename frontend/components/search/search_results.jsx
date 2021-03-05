import React from 'react'; 
import { Link } from 'react-router-dom';
import { IoIosPin } from 'react-icons/io';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories(); 
        this.props.fetchProjects(); 
        this.props.fetchUsers(); 
    }

    render () {
        let projectsList = this.props.projects; 
        let categoriesList = this.props.categories; 

        projectsList = projectsList.filter((project) => (project.title.toLowerCase().includes(this.props.input.toLowerCase())));

        let categoryProjects = []
        if (projectsList.length === 0) {
            categoriesList = categoriesList.filter((category) => category.category_name.toLowerCase().includes(this.props.input.toLowerCase()));
            this.props.projects.forEach((project) => {
                if (project.category_id === categoriesList[0].id) {
                    categoryProjects.push(project) 
                }
            })
        }
        // console.log(categoryProjects)
        // console.log(projectsList)

        let daysLeft = (date) => {
            let today = new Date();
            let ending_date = new Date(date);
            let time_diff = ending_date.getTime() - today.getTime(); //result in milliseconds
            return Math.floor(time_diff / (86400000)) //convert to days from milliseconds, rounded down 
        }

        return (
            <div>
                <div className="search-intro-container">
                    <div className="search-intro">Show me</div>
                    <div className="search-intro-input">{this.props.input}</div>
                    <div className="search-intro">projects in</div>
                    <div className="search-intro-input">All Categories</div>
                    <div className="search-intro">on</div>
                    <div className="search-intro-input">Earth</div>
                    <div className="search-intro">sorted by</div>
                    <div className="search-intro-input">Magic</div>
                </div>
                <div className="search-results-container">
                    {(projectsList.length > 0) ? projectsList.map((project, i) => {
                        return (
                            <div key={i} className="project-search-each">
                                <Link to={`/projects/${project.id}`}>
                                    <img src={project.photo} />
                                </Link>
                                <div className="project-search-info">
                                    <div className="project-search-title">
                                        <Link className="project-search-title" to={`/projects/${project.id}`}>
                                            {project.title}
                                        </Link>
                                    </div>
                                    <div className="project-search-desc">
                                        {project.description}
                                    </div>
                                    <div className="project-search-name">
                                        by {this.props.users[project.author_id].name}
                                    </div>
                                    <div className="project-search-progress-bar-container"> 
                                        <div className="project-search-show-progress-bar" style={{ width: `calc(1% * ${Math.floor((project.amount_pledged / project.funding_goal) * 100)})` }}></div>
                                    </div>
                                    <div className="project-search-amt">
                                        ${project.amount_pledged} pledged 
                                    </div>
                                    <div className="project-search-days-left">
                                        {!daysLeft ? null : daysLeft(project.end_date) < 0 ? "0" : daysLeft(project.end_date).toString()} days left
                                    </div>
                                    <div className="project-search-location">
                                        <IoIosPin size={14} className="map-pin" /> {project.location}
                                    </div>
                                </div>
                            </div>
                        )
                    }) : categoryProjects.map((project, j) => {
                        return (
                            <div key={j} className="project-search-each">
                                <Link to={`/projects/${project.id}`}>
                                    <img src={project.photo} />
                                </Link>
                                <div className="project-search-info">
                                    <div className="project-search-title">
                                        <Link className="project-search-title" to={`/projects/${project.id}`}>
                                            {project.title}
                                        </Link>
                                    </div>
                                    <div className="project-search-desc">
                                        {project.description}
                                    </div>
                                    <div className="project-search-name">
                                        by {this.props.users[project.author_id].name}
                                    </div>
                                    <div className="project-search-progress-bar-container">
                                        <div className="project-search-show-progress-bar" style={{ width: `calc(1% * ${Math.floor((project.amount_pledged / project.funding_goal) * 100)})` }}></div>
                                    </div>
                                    <div className="project-search-amt">
                                        ${project.amount_pledged} pledged
                                    </div>
                                    <div className="project-search-days-left">
                                        {!daysLeft ? null : daysLeft(project.end_date) < 0 ? "0" : daysLeft(project.end_date).toString()} days left
                                    </div>
                                    <div className="project-search-location">
                                        <IoIosPin size={14} className="map-pin" /> {project.location}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SearchResults; 