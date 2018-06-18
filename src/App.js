import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(robots => {
        this.setState({ robots: robots });
      });
  }

  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox
          searchField={this.state.searchField}
          searchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
