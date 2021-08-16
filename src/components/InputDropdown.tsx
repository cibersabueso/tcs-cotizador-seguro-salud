import React, {
  useState,
  FC,
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
} from "react";

interface InputDropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  valueSelect: string;
  value: string;
  error: string;
  locked: boolean;
  active: boolean;
  predicted: string;
}

const InputDropdown: FC<InputDropdownProps> = (props) => {
  const [active, setActive] = useState<boolean>(
    (props.locked && props.active) || false
  );
  const [value, setValue] = useState<string>(props.value || "");
  const [error, setError] = useState<string>(props.error || "");
  const [label, setLabel] = useState<string>(props.label || "Label");

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      setValue(props.predicted);
    }
  };

  const { predicted, locked } = props;
  const fieldClassName = `input-select__input${
    (locked ? active : active || value) && "--active"
  }${locked && !active ? "--locked" : ""}`;

  return (
    <div className="input-select">
      <select
        name="tipoDocumento"
        className="input-select__select"
      >
        <option className="select-styled" value="2">DNI</option>
        <option className="select-styled" value="4">C.E.</option>
        <option className="select-styled" value="6">RUC</option>
      </select>
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
    </div>
  );
};

export default InputDropdown;
