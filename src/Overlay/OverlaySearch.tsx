import React, {
  KeyboardEvent,
  ChangeEvent,
  useState,
  useEffect,
  useContext
} from "react";
import { Tooltip, Icon } from "antd";
import styles from "./OverlaySearch.module.scss";
import { StoreContext } from "../store";

const OverlaySearch = () => {
  const [searchValue, setSearchValue] = useState();
  const { dispatch } = useContext(StoreContext);
  let searchInput: React.RefObject<HTMLInputElement> = React.createRef();

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setSearchValue(target.value);
  };

  const onSearchFormSubmit = (e: KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "submitSearch", payload: searchValue });
    dispatch({ type: "toggleOverlay", payload: false });
  };

  useEffect(() => {
    searchInput.current!.focus();
  }, [searchInput]);

  return (
    <form className={styles["search__form"]} onSubmit={onSearchFormSubmit}>
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
    </form>
  );
};

export default OverlaySearch;
