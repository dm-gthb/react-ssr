import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authUser, logoutUser } from '../actions';

const Header = ({isLoggedIn, authUser, logoutUser}) => {

  const authBtn = isLoggedIn ? 
    (<button onClick={logoutUser}>Logout</button>) :
    (<button onClick={authUser}>Login</button>);

  return (
    <div>
      <Link to="/">React SSR</Link>

      <div>
        <Link to="/users">Users</Link> 
        <Link to="/admins">Admins</Link> 
        {authBtn}
      </div>
    </div>
  );
};

const mapStateToProps = ({isLoggedIn}) => {
  return {
    isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: () => dispatch(authUser(dispatch)),
    logoutUser: () => dispatch(logoutUser(dispatch)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
