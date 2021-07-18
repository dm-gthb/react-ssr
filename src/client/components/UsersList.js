import React from "react";
import { connect } from "react-redux";
import {fetchUsers} from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>); 
  }

  render() {
    return (
      <ul>
        {this.renderUsers()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers(dispatch))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
