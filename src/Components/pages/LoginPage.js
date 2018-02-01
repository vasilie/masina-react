import React from "react";
import LoginForm from "../forms/LoginForm";
// import 'semantic-ui-css/semantic.min.css';

class LoginPage extends React.Component {
  submit = (data) =>{
    console.log(data);
  }
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

export default LoginPage;
