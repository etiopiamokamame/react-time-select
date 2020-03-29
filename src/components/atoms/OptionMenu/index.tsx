import React from "react";
import { css } from "emotion";
import SelectContext from "../../../contexts/Select";
import { OptionType } from "../../../";

interface IProps {
  option: OptionType;
  index: number;
}

const OptionMenu = ({ option: { label, value }, index }: IProps) => {
  return (
    <SelectContext.Consumer>
      {({ onInputChange, onChange, focusOptionMenuIndex }) => (
        <div
          onMouseDown={() => {
            onInputChange(value);
            if (onChange) {
              onChange(value);
            }
          }}
          className={css({
            color: "#3c4043",
            padding: "0 15px",
            height: 40,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "1rem",
            backgroundColor:
              index == focusOptionMenuIndex ? "#f1f3f4" : "inherit",
            "&:hover": {
              backgroundColor: "#f1f3f4",
            },
          })}
        >
          {label}
        </div>
      )}
    </SelectContext.Consumer>
  );
};

export default OptionMenu;
