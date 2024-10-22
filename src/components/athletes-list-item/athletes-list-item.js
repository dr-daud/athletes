import { Component } from "react";

import './athletes-list-item.css'

class AtheletesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            colorIndex: 0
        };
        this.colors = ['white', 'blue', 'blueviolet', 'brown', 'black']
    }

    handleClick = () => {
        this.setState((prevState) => ({
          colorIndex: (prevState.colorIndex + 1) % this.colors.length
        }));
      };

    render () {
        const currentColor = this.colors[this.state.colorIndex];

        let classNames = "athletes-list__item"
        if (this.props.increaseWeight) {
            classNames += " increase"
        }
        let classNamesArrow = "arrow"
        if(this.props.promotion) {
            classNamesArrow += " like"
        }

        return (
            <li className={classNames}>
                <div className="wrapper">
                    <div className="name" onClick={this.props.onToggleProp} data-toggle="promotion">{this.props.name}</div>
                    <div className="weight">{this.props.weight}</div>
                    <button 
                    onClick={this.handleClick}
                    style={{ backgroundColor: currentColor, color: 'white',  height: '50px', width: '20px', cursor: 'pointer', 'margin-right': '10px' }}></button>
                    <button className="increase-weight" onClick={this.props.onToggleProp} data-toggle="increaseWeight">i</button>
                    <span className={classNamesArrow}>&uarr;</span>
                    <div className="delete-wrapper">
                        <button className="delete" onClick={this.props.onDelete}>Удалить</button>
                    </div>
                </div>
            </li>    
        )
    }
}

export default AtheletesListItem
