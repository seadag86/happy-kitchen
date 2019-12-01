import React, { useContext } from 'react';
import { Col, Button, List, Checkbox } from "antd";
import { StoreContext } from '../store';
import styles from './OverlayFilter.module.scss';

const OverlayFilter: React.FC = () => {
  const { state: { filterActive, filterChoices }, dispatch } = useContext(StoreContext);
  const isActive = filterActive ? "overlay__filter--active" : "";

  const onFilterChange = () => {
    dispatch({ type: 'submitFilters', payload: { colIndex: 0, choiceIndex: 0, } });
  }

  return (
    <div className={`${styles["overlay__filter"]} ${styles[isActive]}`}>
      {filterChoices.map((filterCol) => {
        const choicesLength = filterCol.choices.length > 7
          && <Button>MORE CHOICES</Button>;
        const dataSource = filterCol.choices.filter((choice, i) => i <= 7);
        return (
          <Col key={encodeURI(filterCol.columnName.toLowerCase())} xs={24} sm={12} md={6} lg={4}>
            <h3>{filterCol.columnName}</h3>
            <List
              footer={choicesLength}
              dataSource={dataSource}
              renderItem={choice => (
                <List.Item>
                  <Checkbox checked={choice.enabled} onChange={onFilterChange}>
                    {choice.name}
                  </Checkbox>
                </List.Item>
              )}
            />
          </Col>
        )
      })}
    </div>
  );
};

export default OverlayFilter;
