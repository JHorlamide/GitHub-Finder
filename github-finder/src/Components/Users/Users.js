import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';

const Users = ({ user, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {user.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Users.propType = {
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
