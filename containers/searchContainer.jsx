import React, { Component } from 'react';
import axios from 'axios';

class SearchContainer extends Component {
  
  // static getInitialProps(context) {
  // axios.get();
  //   return {}
  // }
componentDidMount() {
  axios.get('http://www.omdbapi.com/?t=abc&y=1950&apikey=fea84d74')
  .then(response=> {
    console.log(response)
  })
}


  render() {
    return ( 
    <div><h1>Nikhil</h1></div>);
  }
}

export default SearchContainer;
