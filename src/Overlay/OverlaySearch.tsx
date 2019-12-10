import React, {
  KeyboardEvent,
  ChangeEvent,
  useState,
  useEffect,
  useContext
} from "react";
import { Tooltip, Icon, Row, Button } from "antd";
import styles from "./OverlaySearch.module.scss";
import { StoreContext } from "../store";

const OverlaySearch = () => {
  const [searchValue, setSearchValue] = useState();
  const {
    state: { searchActive },
    dispatch
  } = useContext(StoreContext);
  const isActive = searchActive ? "overlay__search--active" : "";
  let searchInput: React.RefObject<HTMLInputElement> = React.createRef();

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setSearchValue(target.value);
  };

  const onCloseSearch = () => {
    dispatch({ type: "toggleOverlay", payload: false });
    dispatch({ type: "toggleSearch", payload: false });
  };

  const onCancelSearch = () => {
    dispatch({ type: "submitSearch", payload: "" });
  };

  const onSearchFormSubmit = (e: KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      dispatch({ type: "submitSearch", payload: searchValue });
    }

    onCloseSearch();
  };

  useEffect(() => {
    searchInput.current!.focus();
  }, [searchInput]);

  return (
    <div className={`${styles["overlay__search"]} ${styles[isActive]}`}>
      <form className={styles["search__form"]} onSubmit={onSearchFormSubmit}>
        <Row className={styles["search__form__fields"]}>
          <Icon type="search" />

          <input
            type="search"
            ref={searchInput}
            placeholder="Find a recipe"
            onChange={onSearchValueChange}
          />

          <Tooltip title="Press enter after typing search terms">
            <Icon type="info-circle" />
          </Tooltip>
        </Row>

        <Row className="form__actions" type="flex" justify="start">
          <Button type="primary" htmlType="submit" onClick={onCloseSearch}>
            CLOSE
          </Button>
          <Button
            type="primary"
            ghost
            htmlType="reset"
            onClick={onCancelSearch}
          >
            RESET
          </Button>
        </Row>
      </form>
    </div>
  );
};

export default OverlaySearch;
