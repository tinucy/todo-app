import React from "react";
import "./list_todo.scss";

export default function list_todo() {
  return (
    <div className="listTodo">
      <div className="listTodo__row">
        <div className="listTodo__item">Buy New Laptop</div>
        <div className="listTodo__delete">Del</div>
      </div>
    </div>
  );
}
