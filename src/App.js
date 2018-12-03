import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Clock from './component/Clock';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PersonList from './component/PersonList';

class App extends Component {
  render() {
    var activi = [
      {
        timestamp: new Date().getTime(),
        text: "Have Lunch",
        user: {
          id: 1,
          name: "Nate",
          avatar: "https://images.unsplash.com/photo-1530919424169-4b95f917e937?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1831ca8f86228a8439744fd91da0f7a4&w=1000&q=80"
        },
        comments: [
          { from: 'Aroi', text: 'Me Too!' }
        ]
      },
      {
        timestamp: new Date().getTime(),
        text: "Meet Up",
        user: {
          id: 2,
          name: "Aroi",
          avatar: "https://images.unsplash.com/photo-1530919424169-4b95f917e937?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1831ca8f86228a8439744fd91da0f7a4&w=1000&q=80"
        },
        comments: [
          { from: 'Nate', text: 'I am Coming!' }
        ]
      }
    ]
    return (
      <Router>
        <div className="App">
          <Header title="Inner Thoughts" />
          <Content activities={activi} />
          <Clock />
          <Link to="/tree">Show me API Data</Link>
          <Route path="/tree" component={Tre} />
        </div>
      </Router>
    );
  }
}
function Tre() {
  return (
    <React.Fragment>
      <PersonList />
    </React.Fragment>
  );
}

export default App;
