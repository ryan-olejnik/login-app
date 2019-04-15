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