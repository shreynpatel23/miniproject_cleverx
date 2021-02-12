import React from "react";
import "../inputStyles.css";

function Input({ hasError = "", ...props }: any) {
  return (
    <input
      className={`commonInputClass ${
        hasError !== "" ? "error" : "formControl"
      }`}
      {...props}
    />
  );
}

export default Input;
