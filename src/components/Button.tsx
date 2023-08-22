import React, { Component } from "react";

interface ButtonProps {
  id: string;
  label?: string;
  onClick?: React.MouseEventHandler;
}

class Button extends Component<ButtonProps> {
  render() {
    const { id, label, onClick } = this.props;

    return (
      <button
        id={id}
        className="w-full h-12 bg-blue-500 rounded-md text-white font-semibold"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}

export default Button;
