import React from "react";

interface Props {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  id: string;
  name: string;
}

const InputCheckbox = (props: Props) => {
  return (
    <div className="input-checkbox">
      {props.label}
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        checked={props.isChecked}
        onChange={props.handleChange}
      />
      <span className="checkmark"></span>
    </div>
  );
};
export default InputCheckbox;
