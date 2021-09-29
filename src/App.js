import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
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
        {/* リンクで指定したパスが来た時にコンポーネントを振り分ける処理 */}
        {/* propsの中のmatchにurl: "page1"が入っているので取り出して使う */}
        <Switch>
          <Route
            path="/page1"
            render={({ match: { url } }) => (
              <Switch>
                <Route exact path={`${url}`}>
                  <Page1 />
                </Route>
                <Route path={`${url}/detailA`}>
                  <Page1DetailA />
                </Route>
                <Route path={`${url}/detailB`}>
                  <Page1DetailB />
                </Route>
              </Switch>
            )}
          />
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
