import React, { Component } from 'react';
import Table from './Table';
import JSON from '../data/adopteddb.json'
import Search from '../features/Search';

class Admin extends Component {

    state = {
        data: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.data.filter((item) => {
            let searchItem = item.name.toLowerCase() + item.surname.toLowerCase() + item.street.toLowerCase() +
                item.date + item.pet.toLowerCase() + item.town.toLowerCase() + item.id
            return searchItem.match(keyword.toLowerCase())
        });

        this.setState({
            filtered
        })
    }


    render() {
        let listFiltered = this.state.filtered;
        let listWhole = this.state.data;
        return (

            <div className="admin">
                <div className="input_wrapper">
                    <div className="text">Adopters list</div>
                    <Search keywords={this.getKeyword} />
                </div>
                <div className="adopters">
                    <Table
                        list={listFiltered.length === 0 ? listWhole : listFiltered}
                        OnClick={this.sortByPet}
                    />
                </div>
            </div>
        );
    }
}

export default Admin;