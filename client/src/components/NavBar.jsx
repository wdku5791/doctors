import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Image, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as UserActions from './../actions/userActions.js';
// import * as SocketActions from './../actions/socketActionCreator.jsx';
// import * as ChatActions from './../actions/chatActionCreator.jsx';

class NavBar extends Component {
  handleLogout(username) {
    let { dispatch } = this.props;
    dispatch(UserActions.logOut());
  }

  render() {
    let { username, loggedIn } = this.props;

    let LoggedOutNav = (
        <span>
          <NavLink className='navLinks' to="/login" >Login</NavLink>
          <NavLink className='navLinks' to="/signup" >Sign Up</NavLink>
        </span>
      );

    let LoggedInNav = (
      <span>
        <NavLink className='navLinks' to="/" onClick={() => {
          this.handleLogout(username);
        }}>Log out</NavLink>
      </span>
    );

    return (
      <div className='navbar'>
        <h1>Images</h1>
          <NavLink className='navLinks' to="/">Home</NavLink>
          {loggedIn ? LoggedInNav : LoggedOutNav}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavBar);
