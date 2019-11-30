import React, { useContext } from "react";
import { Row, Col, Button } from "antd";
import styles from "./SecondaryMenu.module.scss";
import { StoreContext } from "../store";

const SecondaryMenu = () => {
  const { state: { searchQuery }, dispatch } = useContext(StoreContext);

  const onSearchClick = () => {
    dispatch({ type: "toggleOverlay", payload: true });
  };

  const onFilterClick = () => {
    dispatch({ type: "toggleOverlay", payload: true });
  };

  const searchClass = searchQuery.length ? "active" : "";

  return (
    <section className={styles["app__search"]}>
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <Button type="link" icon="search" onClick={onSearchClick}>
            <label className={styles[searchClass]}>&nbsp;Search</label>&nbsp;
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
