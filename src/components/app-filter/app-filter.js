import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все спорстмены'},
        {name: 'promotion', label: 'На промоушен'},
        {name: 'heaverThan77', label: ' 77+ '},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'active' : '';  
        return (
            <button className={`app-filter__btn ${clazz}`}
            key={name}
            onClick={() => props.onFilterSelect(name)}>{label}</button>
        )
    }) 

    return (
        <div className="app-filter">
            {buttons}
        </div>
    )
}
export default AppFilter