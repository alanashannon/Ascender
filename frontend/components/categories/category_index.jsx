import React from 'react'; 
import { Link } from 'react-router-dom';

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories(); 
    }

    render() {
        let categoriesArr = Object.values(this.props.categories)
        return (
            <div className="categories-all">
                <div className="collections-container">
                    <div className="collections-header">
                        <h1>Collections</h1>
                    </div>
                    <ul>
                        <li className="collections-list">
                            <Link className="list-everything" to={"/"}>Everything</Link>
                        </li>
                    </ul>
                </div>
                <div className="sections-container">
                    <div className="sections-header">
                        <h1>Sections</h1>
                    </div>
                    {categoriesArr.map((category, i) => {
                        return (
                            <div key={i} className="collections-list">
                                <Link className="list-everything" to={`/category/${category.id}`}>{category.category_name}</Link>
                            </div>
                        )
                    })}
                </div>
                <div className="categories-container">
                    <div className="categories-header">
                        <h1>Categories</h1>
                    </div>
                    <div className="collections-list">
                        {/* arts */}
                        <Link className="list-everything" to={"/"}>Art</Link> 
                    </div>
                    <div className="collections-list">
                        {/* comics & illustration */}
                        <Link className="list-everything" to={"/"}>Comics</Link>
                    </div>
                    <div className="collections-list">
                        {/* food & craft  */}
                        <Link className="list-everything" to={"/"}>Crafts</Link>
                    </div>
                    <div className="collections-list">
                        {/* arts */}
                        <Link className="list-everything" to={"/"}>Dance</Link>
                    </div>
                    <div className="collections-list">
                        {/* design & tech  */}
                        <Link className="list-everything" to={"/"}>Design</Link>
                    </div>
                    <div className="collections-list">
                        {/* arts */}
                        <Link className="list-everything" to={"/"}>Fashion</Link>
                    </div>
                    <div className="collections-list">
                        {/* film  */}
                        <Link className="list-everything" to={"/"}>Film & Video</Link>
                    </div>
                    <div className="collections-list">
                        {/* food & craft  */}
                        <Link className="list-everything" to={"/"}>Food</Link>
                    </div>
                    <div className="collections-list">
                        {/* games  */}
                        <Link className="list-everything" to={"/"}>Games</Link>
                    </div>
                    <div className="collections-list">
                        {/* publishing  */}
                        <Link className="list-everything" to={"/"}>Journalism</Link>
                    </div>
                    <div className="collections-list">
                        <Link className="list-everything" to={"/"}>Music</Link>
                    </div>
                    <div className="collections-list">
                        {/* arts  */}
                        <Link className="list-everything" to={"/"}>Photography</Link>
                    </div>
                    <div className="collections-list">
                        <Link className="list-everything" to={"/"}>Publishing</Link>
                    </div>
                    <div className="collections-list">
                        {/* design and tech  */}
                        <Link className="list-everything" to={"/"}>Technology</Link>
                    </div>
                    <div className="collections-list">
                        {/* arts  */}
                        <Link className="list-everything" to={"/"}>Theater</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryIndex; 