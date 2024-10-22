import { Component } from "react";

import AtheletesListItem from "../athletes-list-item/athletes-list-item";

import "./athletes-list.css";

class AtheletesList extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        const Elements = this.props.data.map(item => {
            return (
                <AtheletesListItem 
                key={item.id} 
                name={item.name} 
                weight={item.weight} 
                promotion={item.promotion}
                increaseWeight={item.increaseWeight}
                onDelete={() => this.props.onDelete(item.id)}
                onToggleProp={(e) => this.props.onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}/>
            )
        })

        return (
            <ul className="athletes-list">
                {Elements}
            </ul>
        )
    }
}

export default AtheletesList
