import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from './ReposItem';

const Repos = ({repos}) => {
  return repos.map((repo) => {
    return (
      <RepoItem key={repo.id} repo={repo}/>
    )
  })
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repos;
