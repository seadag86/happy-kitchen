import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from './Search.module.scss';

const Search = () => {
  // const onSearchClick = () => {};

  // const onfilterClick = () => {};

  return (
    <section className={styles['app__search']}>
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <Button type="link" icon="search">
            Search
          </Button>
        </Col>

        <Col>
          <Button type="link" icon="filter">
            Filter
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Search;
