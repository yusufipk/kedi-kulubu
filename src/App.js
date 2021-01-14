import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import { Search } from "./components/search/search-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kediler: [],
      searchField: "",
    };
  }

  render() {
    const { kediler, searchField } = this.state;
    const kediFiltrele = kediler.filter((kedi) =>
      kedi.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Kedi Kulübü Üyeleri</h1>
        <Search placeholder="Kediyi ara" handleChange={this.handleChange} />
        <CardList kediler={kediFiltrele} />
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
}

export default App;
