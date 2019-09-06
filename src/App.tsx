import React, { useEffect, useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import Recipe, { IRecipe } from './Recipe/Recipe';
import Search from './Search/Search';
import Overlay from './Overlay/Overlay';
import { recipeApi } from './Recipe/recipie.api';
import styles from './App.module.scss';

const App: React.FC = () => {
  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const { Header, Content, Footer } = Layout;

  useEffect(() => {
    getRecepies();
  }, [query]);

  const getRecepies = async () => {
    const response = await recipeApi({ query: search });
    const data = await response.json();
    setRecipies(data.results);
    console.log(data.results);
  };

  const getSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
  };

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Layout className="layout">
      <Header className={styles['app__header']}>
        <h1 className={styles['app__logo']}>La La's Kitchen</h1>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className={styles['app__menu']}
        >
          <Menu.Item key="1">Find Recipies</Menu.Item>
          <Menu.Item key="3">Random Recipe</Menu.Item>
          <Menu.Item key="2">Your Meal Plan</Menu.Item>
        </Menu>
      </Header>

      <Search />

      <Content className={styles['app__content']}>
        <article className={styles['recipe__container']}>
          <Row type="flex" justify="space-between" gutter={25}>
            {recipes.map((r: IRecipe, ci) => (
              <Col sm={12} md={8} xl={6}>
                <Recipe key={r.id} {...r} />
              </Col>
            ))}
          </Row>
        </article>
      </Content>

      <Footer className={styles['app__footer']}>
        La La's Ketchen ©2019 Created by Rally Media
      </Footer>

      <Overlay active={false}></Overlay>
    </Layout>
  );
};

export default App;
