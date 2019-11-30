import React, { useContext, useEffect } from "react";
import styles from "./Overlay.module.scss";
import { Button } from "antd";
import { StoreContext } from "../store";

const Overlay: React.FC = ({ children }) => {
  const { state: { overlayActive }, dispatch } = useContext(StoreContext);
  const isActive = overlayActive ? "--active" : "";

  const onCloseOverlay = () => {
    dispatch({ type: "toggleOverlay", payload: false });
  };

  useEffect(() => {
    if (overlayActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [overlayActive]);

  return (
    <section className={`${styles["overlay"]} ${styles[`overlay${isActive}`]}`}>
      <header className={styles["overlay__header"]}>
        <Button
          type="link"
          icon="close"
          size="large"
          onClick={onCloseOverlay}
        ></Button>
      </header>
      <article className={styles["overlay__content"]}>{children}</article>
    </section>
  );
};

export default Overlay;
