import React from "react";
import "./errorMessage.css";

function ErrorMessage({ ...props }: any) {
  return <p className="errorText">{props.children}</p>;
}

export default ErrorMessage;
