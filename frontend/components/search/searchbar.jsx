import React from 'react'; 
import { withRouter } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'; 
import { IoMdClose } from 'react-icons/io'


class Searchbar extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            clicked: false,
            input: "",  
        }

        this.handleSearch = this.handleSearch.bind(this); 
        this.handleInput = this.handleInput.bind(this); 
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSearch(e) {
        if (e.key === "Enter") {
            this.setState({
                input: "", 
                clicked: false
            })
            this.props.history.push(`/search/${this.state.input}`)
        }
    }

    render () {
        const searchLink = <div onClick={() => this.setState({clicked: true})} className="search-link">
            Search&nbsp; <BsSearch size={14} />
        </div>

        const searchInput = <div className="search-input-container">
            <input type="text"
                className="search-input"
                id="search-input"
                placeholder="Search for projects or categories"
                value={this.state.input}
                onChange={this.handleInput("input")}
                onKeyDown={this.handleSearch}
                autoFocus
            />
            <IoMdClose size={16} className="search-close" onClick={() => this.setState({clicked: false})}/>
        </div>

        return (
            this.state.clicked ? searchInput : searchLink
        )
    }
}

export default withRouter(Searchbar); 