import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <Switch>
          <Route path="/">
            <Movies />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default App;
