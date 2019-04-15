import React from 'react';
import PropTypes from 'prop-types';
import requestsManager from '../utils/requestsManager';

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
      this.setState({ loading: false, userData: res.data });
    })
    .catch(err => {
      debugger;
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading users data...</h1>
    }

    return (
      <div>
        Users secret data: {this.state.userData}
      </div>
    );
  }
}

UserPageContainer.propTypes = {
  //exampleProp: PropTypes.string,
};

export default UserPageContainer;