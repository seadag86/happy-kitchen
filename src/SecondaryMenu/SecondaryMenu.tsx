import React from "react";
import { Row, Col, Button } from "antd";
import styles from "./SecondaryMenu.module.scss";
import { useStateValue } from "../state";

const SecondaryMenu = () => {
  const [{ searchQuery }, dispatch] = useStateValue();

  const onSearchClick = () => {
    dispatch({ type: "toggleOverlay", payload: true });
    document.body.style.overflow = "hidden";
  };

  const onFilterClick = () => {
    dispatch({ type: "toggleOverlay", payload: true });
    document.body.style.overflow = "hidden";
  };

  const searchClass = searchQuery.length ? "active" : "";

  return (
    <section className={styles["app__search"]}>
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <Button type="link" icon="search" onClick={onSearchClick}>
            <label className={styles[searchClass]}>Search</label>&nbsp;
            <strong>{searchQuery}</strong>
          </Button>
        </Col>

        <Col>
          <Button type="link" icon="filter" onClick={onFilterClick}>
            Filter
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default SecondaryMenu;
