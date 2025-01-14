import { Component } from "react"

import "./search-panel.css"

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="search">
                <input type="text" 
                placeholder="Введите имя спортсмена..." 
                className="search__input" 
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPanel