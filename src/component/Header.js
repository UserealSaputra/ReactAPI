import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        }
    }
    showSearch() {
        this.setState({
            searchVisible: !this.setState.searchVisible
        })
    }
    render() {
        let searchInputClasses = ['searchInput'];
        if (this.state.searchVisible) {
            searchInputClasses.push("active");
        }
        return (
            <div className="header">
                <div className="fa fa-more">
                    <span className="title">{this.props.title}</span>
                    <input type="text" className={searchInputClasses.join(" ")} placeholder="search" />
                    <div className="fa fa-search searchIcon" onClick={this.showSearch.bind(this)}>search</div>
                </div>
            </div >
        );
    }
}

export default Header;
