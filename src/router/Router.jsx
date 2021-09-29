import { Route, Switch } from "react-router-dom";

import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
// {/* リンクで指定したパスが来た時にコンポーネントを振り分ける処理 */}
// {/* propsの中のmatchにurl: "page1"が入っているので取り出して使う */}
export const Router = () => {
  return (
    <Switch>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
