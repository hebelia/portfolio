import React from "react";
import styles from "./Button.css";

const Button = ({ color }) => {
  return (
    <div>
      <button className={`${styles["button-hebelia"]} ${styles["is-success"]}`}>
        Primary Button
      </button>
    </div>
  );
};

export default Button;
