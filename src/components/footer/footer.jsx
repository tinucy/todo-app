import React from "react";
import "./footer.scss";

export default function footer() {
  return (
    <div className="footer">
      <p className="footer__pending">You have 4 pending tasks</p>
      <button>Clear All</button>
    </div>
  );
}
