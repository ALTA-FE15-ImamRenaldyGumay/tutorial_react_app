import React, { Component } from "react";

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

class Input extends Component<InputProps> {
  render() {
    const { id, label, name, type, value, onChange } = this.props;

    return (
      <div className="mb-3">
        <label className="block text-gray-700 font-semibold mb-2">
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light bg-white"
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
