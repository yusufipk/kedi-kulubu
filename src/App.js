import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";

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
        <CardList>
          {this.state.kediler.map((users) => (
            <h1 key={users.id}>{users.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/yusufipk/kedi-kulubu/master/data/db.json"
    )
      .then((response) => response.json())
      .then((users) => this.setState({ kediler: users }));
  }
}

export default App;
