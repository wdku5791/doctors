import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import Console from './components/console.jsx';
import OptionBar from './components/optionBar.jsx';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      filter: null,
      selected: null,
      sublist: [],
    }
    this.query = this.query.bind(this);
    this.selector = this.selector.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.doctors.length === 0) {
      this.query();
    }
  }

  query(queryObj = {}) {
    axios.get('/doctors', {params: queryObj})
    .then(({data}) => {
      console.log('data received', data);
      this.setState({
        doctors: data.doctors,
        filter: queryObj.queryString
      })
    })
    .catch(function (error) {
      console.log('errored out', error);
      this.setState({
        doctors: [],
        filter: null
      })
    });
  }

  filterHandler(string) {
    console.log(string);
    if (string !== this.state.filter) {
      let payload = {
        queryString: string
      };
      this.query(payload);
    }
  }

  selector(entry) {
    if (entry) {
      axios.get('/doctors', {params: 
        {queryString: entry.specialty}
      })
      .then(({data}) => {
        console.log('data', data)
        this.setState({
          sublist: data.doctors,
          selected: entry
        })
      })
      .catch(function (error) {
        console.log('errored out', error);
        this.setState({
          sublist: [],
          selected: null
        })
      });
    } else {
      this.setState({
        sublist: [],
        selected: null
      })
    }
  }

  render() {

    return (
      <div>
        <OptionBar 
        filter={this.state.filter}
        filterHandler={this.filterHandler} />
        <Console doctors={this.state.doctors}
        selected={this.state.selected}
        selector={this.selector}
        sublist={this.state.sublist} />
      </div>
    );
  }
}

render(
    <Index />,
  document.getElementById('root')
);
