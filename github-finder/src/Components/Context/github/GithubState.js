import React, { useState, useReducer } from 'react';
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User

  // Get User,

  // Get Repos,

  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.childrend}
    </GithubContext.Provider>
  );
};

export default GithubState;
