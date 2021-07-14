import React from 'react'; 
import { Link } from 'react-router-dom'; 
import ProjectIndexItem from '../projects/project_index_item';
import FeaturedProject from '../projects/featured_project';
import FooterContainer from '../footer/footer_container';


class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategories()
        .then(() => this.props.fetchUsers())
        .then(() => this.props.fetchProjects())
    }

    render() {

        const catInfoArr = [
            { catName: "Arts", info: "Discover the artists and organizations using Ascender to realize ambitious projects in visual art and performance."},
            { catName: "Comics & Illustration", info: "Explore fantastical worlds and original characters from Ascender’s community of comics creators and illustrators."},
            { catName: "Design & Tech", info: "From fine design to innovative tech, discover projects from creators working to build a more beautiful future."},
            { catName: "Film", info: "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen."},
            { catName: "Food & Craft", info: "See how artisans and entrepreneurs are using Ascender to break new ground in food, fashion, and crafts."},
            { catName: "Games", info: "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay."},
            { catName: "Music", info: "Discover new albums, performances, and independent venues from creators using Ascender to shape the future of sound."},
            { catName: "Publishing", info: "Explore how writers and publishers are using Ascender to bring new literature, periodicals, podcasts, and more to life."}
        ]

        const projectsArr = Object.values(this.props.projects)
        const categoriesArr = Object.values(this.props.categories)

        let categoryProjects = [];
        projectsArr.forEach(project => {
            if (project.category_id === this.props.category.id) {
                categoryProjects.push(project)
            }
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

                <div>
                    {catInfoArr.map((catInfo, j) => {
                        return (
                            <div key={j}>
                                {categoriesArr.map((cat, k) => {
                                    if (catInfo.catName === cat.category_name && cat.id === this.props.category.id) {
                                        return (
                                            <div key={k} className="cat-info-container">
                                                <div className="cat-info-name">
                                                    {catInfo.catName}
                                                </div>
                                                <div className="cat-info-info">
                                                    {catInfo.info}
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}
                </div>
              
                <div className="index-container">
                    <section className="featured-project">
                        <div className="featured-header">Featured Project</div>
                        <FeaturedProject project={categoryProjects[0]} users={this.props.users}/>
                    </section>

                    <section className="recommended-projects">
                        <div className="recommended-header">Recommended For You</div>
                        <ul>
                            {categoryProjects.map((project, idx) => {
                                return <ProjectIndexItem project={project} users={this.props.users} key={idx} />
                            })}
                            <br />
                        </ul>
                    </section>
                </div>
                
                <FooterContainer />
            </div>
        )
    }
}

export default CategoryShow; 