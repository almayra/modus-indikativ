import React from "react";
import styles from "./box.module.scss";

interface IBox {
  children: React.ReactNode;
}

export const Box = ({ children }: IBox) => {
  return <div className={styles.Box}>{children}</div>;
};

export default Box;
