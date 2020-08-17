import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await axios.get('https://api.github.com/users');
      this.setState({ users: res.data, loading: false });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users key={this.state.users.id} user={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
