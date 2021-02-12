import React from "react";

function Tick({
  color = "#31b975",
  width = "15",
  height = "15",
  margin = "0px",
  props,
}: any) {
  return (
    <svg
      style={{ fill: color, marginBottom: margin }}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20.958 20.958"
      {...props}
    >
      <g
        id="Group_39"
        data-name="Group 39"
        transform="translate(-1139.001 -273)"
      >
        <path
          id="Union_8"
          d="M3.98 17.933a1.978 1.978 0 1 1 0-3.956h3.9V-.086A1.912 1.912 0 0 1 9.8-2a1.913 1.913 0 0 1 1.908 1.914v17.415a.478.478 0 0 1-.386.469.492.492 0 0 1-.34.136z"
          data-name="Union 8"
          transform="rotate(45 245.595 1524.995)"
        />
      </g>
    </svg>
  );
}

export default Tick;
