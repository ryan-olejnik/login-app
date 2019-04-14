import React from 'react';
import styled from 'styled-components'
import LoginForm from '../components/LoginForm';


const RootContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`

const LoginPageContainer = () => {
  return (
    <RootContainer>
      <LoginForm />
    </RootContainer>
  );
}

export default LoginPageContainer;