import React from "react";

type buttonProps = {
  disabled: boolean;
};

function SaveButton(props: buttonProps) {
  return (
    <div>
      <button style={buttonStyle} disabled={props.disabled}>
        Save
      </button>
    </div>
  );
}

const buttonStyle = {
  width: "500px",
  height: "40px",
  fontSize: "18px",
  background: "#f5f3f3",
  border: "1px solid #b5b2b2",
};
export default SaveButton;
