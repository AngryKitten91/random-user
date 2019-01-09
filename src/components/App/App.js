import React, { Component } from "react";
import "./App.css";

import User from "components/User";
import Loader from "components/Loader";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.results
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div className="container">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    }

    return (
      <div className="container">
        {items.map((person, i) => {
          return <User key={i} person={person} />;
        })}
      </div>
    );
  }
}

export default App;
