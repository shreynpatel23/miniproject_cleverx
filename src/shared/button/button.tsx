import React from "react";
import "./button.css";
import Loading from "../loading/loading";

function Button({ isLoading, disabled, ...props }: any) {
  return (
    <button className="button" disabled={disabled} {...props}>
      {isLoading ? (
        <Loading loadingColor="#fff" width="7px" height="7px" />
      ) : (
        <p className="button_text">{props.button_text}</p>
      )}
    </button>
  );
}

export default Button;
