import { Component } from "react";

import "./app-info.css";

class AppInfo extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="info-section">
                <h1 className="info-section__title">Учёт спортсменов</h1>
                <div className="info-section__amount">Общее число спортсменов: {this.props.athletesAmount}</div>
                <div className="info-section__promotion">Пояс получат: {this.props.promotion}</div>
                <div className="info-section__weight">Меняют категорию: {this.props.increaseWeight}</div>
            </div>
        )
    }
}

export default AppInfo