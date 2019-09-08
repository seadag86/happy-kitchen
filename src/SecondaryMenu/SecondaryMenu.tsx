import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from './SecondaryMenu.module.scss';
import { useStateValue } from '../state';

const SecondaryMenu = () => {
  const [_, dispatch] = useStateValue();

  const onSearchClick = () => {
    dispatch({ type: 'toggleOverlay', payload: true });
    document.body.style.overflow = 'hidden';
  };

  const onFilterClick = () => {
    dispatch({ type: 'toggleOverlay', payload: true });
    document.body.style.overflow = 'hidden';
  };

  return (
    <section className={styles['app__search']}>
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <Button type="link" icon="search" onClick={onSearchClick}>
            Search
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
