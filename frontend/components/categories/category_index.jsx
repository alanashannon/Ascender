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
            <div>
                <div className="collections-container">
                    <h1>Collections</h1>
                    <ul>
                        <li>
                            <Link to={"/"}>Everything</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Sections</h1>
                    {categoriesArr.map((category, i) => {
                        return (
                            <div key={i}>
                                <Link to={"/"}>{category.category_name}</Link>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h1>Categories</h1>
                    <div>
                        <Link to={"/"}>Art</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Comics</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Crafts</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Dance</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Design</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Fashion</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Film & Video</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Food</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Games</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Journalism</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Music</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Photography</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Publishing</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Technology</Link>
                    </div>
                    <div>
                        <Link to={"/"}>Theater</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryIndex; 