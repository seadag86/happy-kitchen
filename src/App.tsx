import React, { useEffect, Fragment } from "react";
import { Layout, Menu, Row, Col } from "antd";
import Recipe, { IRecipe } from "./Recipe/Recipe";
import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";
import Overlay from "./Overlay/Overlay";
import { recipeApi } from "./Recipe/recipie.api";
import { useStateValue } from "./state";
import styles from "./App.module.scss";
import OverlaySearch from "./Overlay/OverlaySearch";

const App: React.FC = () => {
  const { Header, Content, Footer } = Layout;
  const [{ recipes, overlayActive, searchQuery }, dispatch] = useStateValue();

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
          <h1 className={styles["app__logo"]}>La La's Kitchen</h1>

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
              {recipes.map((r: IRecipe, i) => (
                <Col key={i} sm={12} md={8} xl={6}>
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

      <Overlay active={overlayActive}>
        <OverlaySearch />
      </Overlay>
    </Fragment>
  );
};

export default App;
