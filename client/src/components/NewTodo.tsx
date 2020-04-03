import React from "react";

type newTodoProps = {
  valueChanged: Function;
};

function NewTodo(props: newTodoProps) {
  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        onChange={(ev) => props.valueChanged(ev.target.value)}
        placeholder="Add a todo"
      />
    </div>
  );
}

const inputStyle = {
  height: "40px",
  width: "500px",
  margin: "20px",
  padding: "15px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "1px solid #d4cdcd",
  boxShadow: "13px 13px 14px -10px rgba(158,152,158,0.59)",
};
export default NewTodo;
