import React from "react";

function ArrowDown({
  classes,
  width = "10.904",
  height = "6.733",
  onClick,
  props,
}: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10.904 6.733"
      className={classes}
      onClick={onClick}
      {...props}
    >
      <path
        id="ic_keyboard_arrow_down_24px"
        d="M1.281 0l4.171 4.162L9.623 0 10.9 1.281 5.452 6.733 0 1.281z"
      />
    </svg>
  );
}

export default ArrowDown;
