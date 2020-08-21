import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import User from './Components/Users/User';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  /***  Get all github user ***/
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

  /*** Search github users ***/
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

  /*** Get Single Github user ***/
  getUser = async (username) => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ user: res.data, loading: false });
    } catch (err) {
      console.error(err);
    }
  };

/*** Get User Repos ***/
  getUserRepos = async (username) => {
      this.setState({ loading: true });
      try {
        const res = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        this.setState({ repos: res.data, loading: false });
      } catch (err) {
        console.error(err);
      }
  }

  /*** Clear users from state ***/
  clearUser = () => {
    this.setState({ user: [], loading: false });
  };

  /*** Set alert ***/
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type },
    });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, user, loading, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  return (
                    <Fragment>
                      <Search
                        searchUser={this.searchUser}
                        showClear={users.length > 0 ? true : false}
                        clearUser={this.clearUser}
                        setAlert={this.setAlert}
                      />
                      <Users
                        key={this.state.users.id}
                        user={users}
                        loading={loading}
                      />
                    </Fragment>
                  );
                }}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => {
                  return (
                    <User
                      {...props}
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
                      user={user}
                      repos={repos}
                      loading={loading}
                    /> 
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
