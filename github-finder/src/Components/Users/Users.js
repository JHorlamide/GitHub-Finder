import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ user }) => {
  return (
    <div style={userStyle}>
      {user.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Users.propType = {
  user: PropTypes.object.isRequired,
};

export default Users;
