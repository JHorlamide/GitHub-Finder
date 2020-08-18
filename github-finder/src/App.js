import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
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
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  // Search github users
  searchUser = async (text) => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
    } catch (err) {
      console.error(err);
    }
  };

  // Clear users from state
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={users.length > 0 ? true : false}
          />
          <Users
            key={this.state.users.id}
            user={users}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
