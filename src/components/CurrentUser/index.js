import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import { useHistory } from 'react-router-dom'

const CurrentUser = () => {
  const { user, initialising, error, login, logout } = useContext(UserContext);
  let history = useHistory();

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
};

export default CurrentUser;