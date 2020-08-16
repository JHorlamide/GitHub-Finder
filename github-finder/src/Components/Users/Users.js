import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: Math.random() * 5,
        login: 'JHorlamide',
        avatar_url: 'https://avatars2.githubusercontent.com/u/52703945?v=4',
        html_url: 'https://github.com/JHorlamide',
      },
      {
        id: Math.random() * 5,
        login: 'Mojombo',
        avatar_url: 'https://avatars2.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: Math.random() * 5,
        login: 'Pjhyett',
        avatar_url: 'https://avatars2.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/defunkt',
      },
    ],
  };

  render() {
    return <div>
      {this.state.users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))} 
    </div>;
  }
}

export default Users;
