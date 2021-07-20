import React from "react";
import { connect } from "react-redux";
import {fetchUsers} from '../actions';

class UsersListPage extends React.Component {
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

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export {loadData};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UsersListPage),
  loadData
};
