import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import HomeProvider from "./contexts/HomeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HomeProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route
            path="/detail/:id"
            render={() => <Detail key={uuid()} />}
            exact
          />
          <Route
            path="/search/:query"
            render={() => <Search key={uuid()} />}
            exact
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </HomeProvider>
  );
}
