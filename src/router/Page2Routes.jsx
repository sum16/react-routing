import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// page1配下の画面遷移を切り出し
export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // pathの名称はなんでもok
    path: "/:id ",
    exact: false,
    children: <UrlParameter />
  }
];
