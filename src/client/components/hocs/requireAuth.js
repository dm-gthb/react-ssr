import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends React.Component {
     render() {
        switch (this.props.isLoggedIn ) {
          case false:
            return <Redirect to="/" />;
          case null:
            return <div>...loading</div>;
          default: 
            return <ChildComponent {...this.props} />
        }
     }
  }

  const mapStateToProps = ({isLoggedIn}) => {
    return {
      isLoggedIn
    }
  }

  return connect(mapStateToProps)(RequireAuth);
}
