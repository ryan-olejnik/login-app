import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Button from './Button';
import { withRouter } from 'react-router-dom';



const RootContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px #c1c1c178;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 18px;
`

const Header = styled.h1`
  text-align: center;
`

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

const Input = styled.input`
  width: 50%;
  font-size: 20px;
  border-radius: 1px;
  border: none;
  background-color: #e7eaee91;
  padding: 0.25em 4px;
  min-width: 100px;

  :not(:last-child) {
    margin-right: 8px;
  }
`

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: move to redux:
      username: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin() {
    alert('login!!!')
  }

  handleInputChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <RootContainer>
        <Header>Login</Header>
        <InputContainer>
          <Input
            name='username'
            onChange={this.handleInputChange}
            placeholder='username'
            value={this.state.username}
          />
          <Input
            name='password'
            type='password'
            onChange={this.handleInputChange}
            placeholder='password'
            value={this.state.password}
          />
        </InputContainer>
        <Button
          onClick={this.handleLogin}
          text='Login'
        />
      </RootContainer>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.object
};

export default withRouter(LoginForm);
