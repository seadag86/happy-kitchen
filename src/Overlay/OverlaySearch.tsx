import React from 'react';
import { Input, Tooltip, Icon } from 'antd';
import styles from './OverlaySearch.module.scss';

const OverlaySearch = () => {
  return (
    <form className={styles['search__form']}>
      <Icon type="search" />

      <input type="search" placeholder="Find a recipe" />

      <Tooltip title="Press enter after typing or choose an item from the list">
        <Icon type="info-circle" />
      </Tooltip>
    </form>
  );
};

export default OverlaySearch;
