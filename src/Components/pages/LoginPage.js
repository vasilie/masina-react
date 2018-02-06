import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";
// import 'semantic-ui-css/semantic.min.css';

class LoginPage extends React.Component {
  submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));
  render(){

    return (
      <div className='wrapper'>
        Login page
        <br />
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);
