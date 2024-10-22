import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import AtheletesList from '../athelets-list/athletes-list';
import AtheletesAddForm from '../athletes-add-form/athletes-add-form';
import { Component } from 'react';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Chosh H.', weight: 77, promotion: true, increaseWeight: true, id: 1},
                {name: 'Kosh H.', weight: 69, promotion: false, increaseWeight: true, id: 2},
                {name: 'Yahsan H.', weight: 84, promotion: true, increaseWeight: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState (({data}) => {
            return { 
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, weight) => {
        const newItem = {
            name,
            weight,
            promotion: false,
            increaseWeight: false,
            id: this.maxId++
        }
        this.setState (({data}) => {
            if (newItem.name.length > 3 || newItem.weight.length > 60) {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchAth = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.promotion);
            case 'heaverThan77' :
                return items.filter(item => item.weight > 76);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {

        const visibleData = this.filterPost(this.searchAth(this.state.data, this.state.term), this.state.filter)
        const athletesAmount = this.state.data.length
        const promotion = this.state.data.filter(item => item.promotion).length
        const increaseWeight = this.state.data.filter(item => item.increaseWeight).length
        return (
            <div className="App">
                <AppInfo
                athletesAmount={athletesAmount}
                promotion={promotion}
                increaseWeight={increaseWeight}/>
                <div className="search-athlete">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    filter={this.state.filter} 
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <AtheletesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <AtheletesAddForm
                onAdd={this.addItem}/>
            </div>
          );
    }
}

export default App;
