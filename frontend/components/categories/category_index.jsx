import React from 'react'; 
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io'

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories(); 
    }

    handleScroll(e) {
        let collections = document.getElementById("collections-header")
        collections.scrollIntoView({
            behavior: "smooth"
        })
    }

    render() {
        let categoriesArr = Object.values(this.props.categories);
        let extendedCategories = [
            {newName: "Art", catName: "Arts"}, 
            {newName: "Comics", catName: "Comics & Illustration"}, 
            {newName: "Crafts", catName: "Food & Craft"}, 
            {newName: "Dance", catName: "Arts"}, 
            {newName: "Design", catName: "Design & Tech"}, 
            {newName: "Fashion", catName: "Arts"}, 
            {newName: "Film & Video", catName: "Film"}, 
            {newName: "Food", catName: "Food & Craft"}, 
            {newName: "Games", catName: "Games"}, 
            {newName: "Journalism", catName: "Publishing"}, 
            {newName: "Music", catName: "Music"}, 
            {newName: "Photography", catName: "Arts"}, 
            {newName: "Publishing", catName: "Publishing"}, 
            {newName: "Technology", catName: "Design & Tech"}, 
            {newName: "Theater", catName: "Arts"}, 
        ];

        return (
            <div className="categories-all" onClick={this.handleScroll}>
                <div className="collections-container">
                    <div className="collections-header" id="collections-header">
                        <h1>Collections</h1>
                        <Link to={"/"} className="exit-button"><IoMdClose size={20} /></Link>
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
                        <Link to={"/"} className="exit-button"><IoMdClose size={20} /></Link>
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
                        <Link to={"/"} className="exit-button"><IoMdClose size={20} /></Link>
                    </div>
                    {extendedCategories.map((newCat, i) => {
                        return (
                            <div key={i}>
                                {categoriesArr.map((cat, j) => {
                                    if (newCat.catName === cat.category_name) {
                                        return (
                                            <div key={j} className="collections-list">
                                                <Link className="list-everything" to={`/category/${cat.id}`}>{newCat.newName}</Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CategoryIndex; 