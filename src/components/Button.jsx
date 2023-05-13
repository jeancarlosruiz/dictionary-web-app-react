import React from "react";

function Button({ variant, disabled, children }) {
  return (
    <button
      className={`${styles.wrapper} ${styles[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
