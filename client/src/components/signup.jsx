import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Form, Button, Message } from 'semantic-ui-react';

class SignUp extends Component {

  render(){

    return (
      <div className='authForm'>
        <h3>Sign Up Page</h3>
        <form>
            <div>
              <input placeholder='username'></input>
            </div>
            <div>
              <input placeholder='password'></input>
            </div>
            <div>
              <input placeholder='confirm password'></input>
            </div>
          <input type="submit" value="Sign Up"></input>
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

export default connect(mapStateToProps)(SignUp);
