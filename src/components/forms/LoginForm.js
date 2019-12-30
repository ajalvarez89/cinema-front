import React from 'react';
import {Form, Button } from 'semantic-ui-react';

class LoginFrom extends React.Component {
  state = {
    date: {},
    loading: false,
    errors: {}
  }

  render() {
    return (
      <Form>
        <Button primary>Login</Button>
      </Form>
    );
  }

}


export default LoginFrom;