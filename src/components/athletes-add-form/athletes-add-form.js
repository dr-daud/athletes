import { Component } from "react";

import "./athletes-add-form.css"

class AtheletesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            weight:''
        }
    }

    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.weight);
        this.setState({
            name:'',
            weight:''
        })
    }

    render() {
        return (
            <div className="athletes-add-form">
                <h2 className="add-title">Добавить нового спортсмена</h2>
                <div className="add-wrapper">
                    <form
                    onSubmit={this.onSubmit}>
                        <input 
                        type="text" 
                        placeholder="Введите имя спортсмена..." 
                        className="add-name" 
                        name="name"
                        value={this.state.name}
                        onChange={this.onValueChange}/>
                        <input 
                        type="number" 
                        placeholder="Введите вес спортсмена..." 
                        className="add-weight" 
                        name="weight"
                        value={this.state.weight}
                        onChange={this.onValueChange}/>
                        <button type="submit" className="add-button">Добавить</button>
                    </form>
            </div>
            </div>
        )
    }
}

export default AtheletesAddForm