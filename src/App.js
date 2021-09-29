import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">home</Link>
        <br />
        <Link to="page1">page1</Link>
        <br />
        <Link to="page2">page2</Link>

        {/* リンクで指定したパスが来た時にコンポーネントを振り分ける */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
