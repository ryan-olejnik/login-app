import React from 'react';
import PropTypes from 'prop-types';
import requestsManager from '../utils/requestsManager';
import styled from 'styled-components'

const RootContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`

const UserDataContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

class UserPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: null 
    };
  }

  componentDidMount() {
    requestsManager.getUserData()
    .then(res => {
      if (res.status === 200) {
        this.setState({ loading: false, userData: res.data.userData });
      } else {
        throw new Error(res.description);
      }
    })
    .catch(err => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <RootContainer>
        <UserDataContainer>
          {
            this.state.loading
            ? <h2>Loading...</h2>
            : <React.Fragment>
              <h2>Welcome {this.state.userData.username}!</h2>
              <p>Your secret data is: {this.state.userData.data}</p>
            </React.Fragment>
          }
        </UserDataContainer>
      </RootContainer>
    );
  }
}

export default UserPageContainer;