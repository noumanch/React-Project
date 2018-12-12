import React, { Component } from 'react';

const API = 'http://localhost:5000/cities';
const DEFAULT_QUERY = 'redux';

class Cities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  render(){
    const { data } = this.state;
    console.log(data);
    return(
      <div>
        {data.map(list =>
          <div key={list._id}>
          <h1>{list.country}</h1>
          <h3>{list.city}</h3>
          </div>
        )}
      </div>
    );
  }

}
export default Cities;
