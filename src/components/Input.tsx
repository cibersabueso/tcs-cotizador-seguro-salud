import React, {
  useState,
  FC,
} from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value?: string;
  error: string;
  locked: boolean;
  active: boolean;
  predicted: string;
}

const Input: FC<InputProps> = (props) => {
  const [active, setActive] = useState<boolean>(
    (props.locked && props.active) || false
  );
  const [value, setValue] = useState<string>(props.value || "");
  const [error, setError] = useState<string>(props.error || "");
  const [label, setLabel] = useState<string>(props.label || "Label");

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      setValue(props.predicted);
    }
  };

  const { predicted, locked } = props;
  const fieldClassName = `field ${
    (locked ? active : active || value) && "active"
  } ${locked && !active && "locked"}`;

  return (
    <div className={fieldClassName}>
      {active && value && predicted && predicted.includes(value) && (
        <p className="predicted">{predicted}</p>
      )}
      <input
        id="1"
        type="text"
        value={value}
        placeholder={label}
        onChange={changeValue}
        onKeyPress={handleKeyPress}
        onFocus={() => !locked && setActive(true)}
        onBlur={() => !locked && setActive(false)}
      />
      <label htmlFor="1" className={error && "error"}>
        {error || label}
      </label>
    </div>
  );
};

export default Input;
