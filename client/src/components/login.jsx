import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Form, Button, Message } from 'semantic-ui-react';

class Login extends Component {

  render(){

    return (
      <div className='authForm'>
        <h3>Login Page</h3>
        <form>
            <div>
              <input placeholder='username'></input>
            </div>
            <div>
              <input placeholder='password'></input>
            </div>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
