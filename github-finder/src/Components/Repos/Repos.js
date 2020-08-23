import React, { useContext } from 'react';
import RepoItem from './ReposItem';
import GithubContext from '../../Context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  return githubContext.repos.map((repo) => {
    return <RepoItem key={repo.id} repo={repo} />;
  });
};

export default Repos;
