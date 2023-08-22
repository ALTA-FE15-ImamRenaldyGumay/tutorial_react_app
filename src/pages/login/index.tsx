import { Component } from "react";
import { NavigateFunction } from "react-router-dom";
import { withRouter } from "../../withRouter";
import Cookies from "js-cookie";

import Button from "../../components/Button";
import Input from "../../components/Input";

interface LoginProps {
  navigate: NavigateFunction;
}

interface LoginState {
  username: string;
  password: string;
}

class Login extends Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: "",
  };

  handleLogin() {
    const { username, password } = this.state;
    const { navigate } = this.props;
    Cookies.set("username", username, { path: "/" });
    Cookies.set("password", password, { path: "/" });
    navigate("/reqres");
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Input
            id="username"
            name="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button id="login" label="Login" onClick={() => this.handleLogin()} />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
