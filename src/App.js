import React, { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
    console.log(1);
  }

  componentDidMount() {
    this.setState({ robots: robots });
    console.log(2);
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    console.log(3);

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
