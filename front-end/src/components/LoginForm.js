import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import Button from './Button';
import { withRouter } from 'react-router-dom';
import { auth } from '../utils/init';
import { compose } from 'redux';
import { setUsername, setPassword } from '../actions/usersActionCreators';
import { connect } from 'react-redux';


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
  padding: 0.25em 4px;
  min-width: 100px;
  background-color: #e7eaee91;
  ${props => props.error && css`
    background-color: #ffe0e0;`
  }

  :not(:last-child) {
    margin-right: 8px;
  }
`

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      loading: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin() {
    this.setState({ loading: true })
    auth.login(this.props.username, this.props.password)
    .then(res => {
      this.props.history.push('/users');
    })
    .catch(err => {
      this.setState({
        errorMessage: err.description,
        loading: false
      });
    });
  }

  handleInputChange(event) {
    event.preventDefault();
    if (event.target.name === 'username') {
      this.props.setUsername(event.target.value);
    }
    if (event.target.name === 'password') {
      this.props.setPassword(event.target.value);
    }
  }

  renderErrorMessage() {
    const ErrorMessage = styled.p`
      color: red;
      border-radius: 2px;
      padding: 4px;
      margin: 0 0 8px;
    `
    if (this.state.errorMessage) {
      return <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
    } else {
      return null;
    }
  }

  render() {
    return (
      <RootContainer>
        <Header>Login</Header>
        <InputContainer>
          <Input
            name='username'
            error={!!this.state.errorMessage}
            onChange={this.handleInputChange}
            placeholder='username'
            value={this.props.username}
          />
          <Input
            name='password'
            error={!!this.state.errorMessage}
            type='password'
            onChange={this.handleInputChange}
            placeholder='password'
            value={this.props.password}
          />
        </InputContainer>
        {this.renderErrorMessage()}
        <Button
          onClick={this.handleLogin}
          text='Login'
        />
      </RootContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.users.username,
    password: state.users.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsername: username => dispatch(setUsername(username)),
    setPassword: password => dispatch(setPassword(password))
  };
};

LoginForm.propTypes = {
  history: PropTypes.object
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)

export default enhance(LoginForm);


