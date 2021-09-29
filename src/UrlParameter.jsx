import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // Page2Routes.jsxで設定した:id
  const { id } = useParams();
  const search = useLocation(); // locationのsearchにクエリパラメータが格納されている
  // console.log(id);
  // console.log(location);
  const query = new URLSearchParams(search); // クエリパラメータを便利に扱えるメソッドを複数持つ

  return (
    <div>
      <h1>UrlParameterページ</h1>
      <p>URLパラメータは{id}</p>
      <p>クエリパラメータは{query.get("name")}</p>
    </div>
  );
};
