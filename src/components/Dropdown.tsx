import React, {
  useState,
  useEffect,
  FC,
} from "react";

type OptionType = {
  id: number;
  name: string;
};

type DropdownState = {
  defaultSelectText?: string;
  selectOption?: number;
  showOptionList?: boolean;
  optionsList: OptionType[];
}

interface DropdownProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultText?: string;
  selectOption?: number;
  showOptionList?: boolean;
  optionsList: OptionType[];
}

const Dropdown: FC<DropdownProps> = (props) => {
  const [state, setState] = useState<DropdownState>({
    defaultSelectText: "",
    selectOption: 0,
    showOptionList: false,
    optionsList: [],
  });
  
  const handleClickOutside = (e: any): void => {
    const target = e.target as HTMLElement;
    if (
      !target.classList.contains("custom-select-option") &&
      !target.classList.contains("selected-text")
    ) {
      setState({
        ...state,
        
        showOptionList: false,
      });
    }
  };

  const handleListDisplay = () => {
    setState({ ...state, showOptionList: !state.showOptionList });
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    let selectOptionName = state.selectOption && state.optionsList.find(elem => elem.id === state.selectOption)?.name;

    setState({
      ...state,
      defaultSelectText: selectOptionName || "",
      showOptionList: false,
      selectOption: Number(target.getAttribute("data-id")) || 0
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setState({
      ...state,
      defaultSelectText: props.defaultText || "",
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select-container">
      <div
        className={state.showOptionList ? "selected-text chevron chevron-top" : "selected-text chevron chevron-bottom"}
        onClick={handleListDisplay}
      >
        {state.defaultSelectText}
      </div>
      {state.showOptionList && (
        <ul className="select-options">
          {props.optionsList.map((option: OptionType) => {
            return (
              <li
                className="custom-select-option"
                data-id={option.id}
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
