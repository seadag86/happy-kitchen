import React, { useContext } from "react";
import { Button, List, Checkbox } from "antd";
import { StoreContext } from "../store";
import styles from "./OverlayFilter.module.scss";

const OverlayFilter: React.FC = () => {
  const {
    state: { filterActive, filterChoices },
    dispatch
  } = useContext(StoreContext);
  const isActive = filterActive ? "overlay__filter--active" : "";

  const onFilterChecked = (columnName: string, choiceIndex: number) => {
    const payload = filterChoices.map(filterCol => {
      if (filterCol.columnName === columnName) {
        filterCol.choices[choiceIndex].enabled = !filterCol.choices[choiceIndex]
          .enabled;
      }

      return filterCol;
    });

    dispatch({ type: "submitFilters", payload });
  };

  const onCloseFilter = () => {
    dispatch({ type: "toggleOverlay", payload: false });
    dispatch({ type: "toggleFilter", payload: false });
  };

  const onCancelFilter = () => {
    dispatch({ type: "clearFilterChoices", payload: true });
  };

  return (
    <div className={`${styles["overlay__filter"]} ${styles[isActive]}`}>
      <form className={styles["filter__form"]}>
        <section className={styles["filter__choices"]}>
          {filterChoices.map(filterCol => {
            return (
              <section
                key={encodeURI(filterCol.columnName.toLowerCase())}
                className={styles["filter__choices__column"]}
              >
                <h3>{filterCol.columnName}</h3>
                <List
                  size="small"
                  dataSource={filterCol.choices}
                  renderItem={(choice, cidx) => (
                    <List.Item>
                      <Checkbox
                        checked={choice.enabled}
                        onClick={() =>
                          onFilterChecked(filterCol.columnName, cidx)
                        }
                      >
                        {choice.name}
                      </Checkbox>
                    </List.Item>
                  )}
                />
              </section>
            );
          })}
        </section>

        <section className={styles["form__actions"]}>
          <Button type="primary" htmlType="button" onClick={onCloseFilter}>
            CLOSE
          </Button>
          <Button
            type="primary"
            ghost
            htmlType="reset"
            onClick={onCancelFilter}
          >
            RESET
          </Button>
        </section>
      </form>
    </div>
  );
};

export default OverlayFilter;
