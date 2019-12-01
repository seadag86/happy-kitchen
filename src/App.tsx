import React, { useEffect, Fragment, useContext } from "react";
import { Layout, Menu, Row, Col } from "antd";
import Recipe, { IRecipe } from "./Recipe/Recipe";
import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";
import Overlay from "./Overlay/Overlay";
import { recipeApi } from "./Recipe/recipie.api";
import styles from "./App.module.scss";
import OverlaySearch from "./Overlay/OverlaySearch";
import logo from "./assets/images/logo.svg";
import { StoreContext } from "./store";
import OverlayFilter from "./Overlay/OverlayFilter";

const App: React.FC = () => {
  const { Header, Content, Footer } = Layout;
  const { state: { recipes, overlayActive, searchQuery }, dispatch } = useContext(StoreContext);

  const blureEffect = overlayActive ? { filter: "blur(8px)" } : {};

  useEffect(() => {
    const getRecepies = async () => {
      const response = await recipeApi({ query: searchQuery });
      const data = await response.json();

      dispatch({ type: "loadRecipes", payload: data.results });
    };

    getRecepies();
  }, [searchQuery, dispatch]);

  return (
    <Fragment>
      <Layout className="layout" style={blureEffect}>
        <Header className={styles["app__header"]}>
          <img src={logo} alt="Logo" />
          <h1>La La's Kitchen</h1>
          <span className={styles["spacer"]}></span>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className={styles["app__menu"]}
          >
            <Menu.Item key="1">Find Recipies</Menu.Item>
            <Menu.Item key="3">Random Recipe</Menu.Item>
            <Menu.Item key="2">Your Meal Plan</Menu.Item>
          </Menu>
        </Header>

        <SecondaryMenu />

        <Content className={styles["app__content"]}>
          <article className={styles["recipe__container"]}>
            <Row type="flex" justify="space-between" gutter={25}>
              {recipes.map((r: IRecipe, i: number) => (
                <Col key={i} xs={24} sm={12} md={8} lg={6} xl={4}>
                  <Recipe key={r.id} {...r} />
                </Col>
              ))}
            </Row>
          </article>
        </Content>
        <Footer className={styles["app__footer"]}>
          La La's Ketchen ©2019 Created by Rally Media
        </Footer>
      </Layout>

      <Overlay>
        <OverlaySearch />
        <OverlayFilter />
      </Overlay>
    </Fragment>
  );
};

export default App;
