import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

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
    const { robots, searchField } = this.state;
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox
            searchField={searchField}
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
