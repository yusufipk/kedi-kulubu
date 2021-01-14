import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kediler: [],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.kediler.map((users) => (
          <h1 key={users.id}>{users.name}</h1>
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ kediler: users }));
  }
}

export default App;
