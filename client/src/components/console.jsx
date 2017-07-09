import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Form, Button, Message } from 'semantic-ui-react';

class Console extends Component {

  render(){

    return (
      <div className='authForm'>
        console
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // user: state.user
  };
};

export default connect(mapStateToProps)(Console);
