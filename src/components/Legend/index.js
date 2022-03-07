import React from "react";

import "./index.css";

export default function Legend(props) {
  const { name, tax } = props;

  return (
    <p className="legend-container">
      {name} - {tax}%
    </p>
  );
}
