import React, { useState } from "react";

const Button = (props) => {
  const [value, setValue] = useState(props.time);
  return (
    <div className="col">
      <button
        type="button"
        className="p-2 btn btn-outline-secondary"
        onClick={() => props.handleTime(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
