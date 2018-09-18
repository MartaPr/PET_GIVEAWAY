import React, { Component } from 'react';
import JSON from '../data/db.json';
import Search from '../features/Search';
import List from './List';
import Counter from '../features/Counter'
class Home extends Component {

  state = {
    list: JSON,
    filtered: []
  }


  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.list.filter((item) => {
      let searchItem = item.category.toLowerCase() + item.name.toLowerCase() + item.age
      return searchItem.match(keyword.toLowerCase())
    });

    this.setState({
      filtered
    })
  }



  render() {
    let listFiltered = this.state.filtered;
    let listWhole = this.state.list;
    return (
      <div className="home">
        <Counter />
        <div className="input_wrapper">
          <div className="text">Find your pet</div>
          <Search keywords={this.getKeyword} />
        </div>
        <List list={listFiltered.length === 0 ? listWhole : listFiltered} />
      </div>
    );
  }
}

export default Home;
