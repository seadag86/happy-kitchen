import React, { useContext, useEffect, useState } from "react";
import { Row, Button } from "antd";
import styles from "./SecondaryMenu.module.scss";
import { StoreContext } from "../store";

const SecondaryMenu = () => {
  const {
    state: { searchQuery, filterChoices },
    dispatch
  } = useContext(StoreContext);
  const [enabledFilters, setEnabledFilters] = useState('');
  const searchClass = searchQuery.length ? "active" : "";
  const filterClass = enabledFilters.length ? "active" : "";

  const onSearchClick = () => {
    dispatch({ type: "toggleOverlay", payload: true });
    dispatch({ type: "toggleSearch", payload: true });
    console.log("search toggled");
  };

  const onFilterClick = () => {
    dispatch({ type: "toggleOverlay", payload: true });
    dispatch({ type: "toggleFilter", payload: true });
    console.log("filters toggled");
  };

  useEffect(() => {
    const enabledFiltersArray: string = filterChoices
      .reduce((acc: string[], curVal) => {
        const enabledInColumn = curVal.choices.filter(
          choice => choice.enabled && choice.name
        )
          .map(choice => choice.name);
        return [...acc, ...enabledInColumn];
      }, []).join(',');

    setEnabledFilters(enabledFiltersArray);
  }, [filterChoices]);

  return (
    <section className={styles["app__secondary-menu"]}>
      <Row type="flex" justify="space-between" align="middle">
        <Row type="flex" justify="start" align="middle">
          <Button type="link" icon="search" onClick={onSearchClick}>
            <label className={styles[searchClass]}>&nbsp;Search</label>&nbsp;
            <strong>{searchQuery}</strong>
          </Button>
          <Button type="link" icon="filter" onClick={onFilterClick}>
            <label className={styles[filterClass]}>&nbsp;Filter</label>&nbsp;
            <strong>{enabledFilters}</strong>
          </Button>
        </Row>
        <Row type="flex" justify="end" align="middle">
          <Button type="link" icon="shopping-cart" onClick={onFilterClick}>
            Basket
          </Button>
        </Row>
      </Row>
    </section>
  );
};

export default SecondaryMenu;
