import { Component } from "react";
import { NavigateFunction } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { withRouter } from "../../withRouter";

interface PinProps {
  navigate: NavigateFunction;
}

interface PinState {
  pin: number | string;
}

class Pin extends Component<PinProps, PinState> {
  state = {
    pin: "",
  };

  handlePin() {
    const { pin } = this.state;
    const { navigate } = this.props;
    sessionStorage.setItem("pin", pin);
    navigate("/reqres");
  }

  render() {
    const { pin } = this.state;

    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Input
            id="pin"
            name="pin"
            label="Pin"
            type="number"
            value={pin}
            onChange={(e) => this.setState({ pin: e.target.value })}
          />
          <Button id="login" label="Login" onClick={() => this.handlePin()} />
        </div>
      </div>
    );
  }
}

export default withRouter(Pin);
