import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  // Page2Routes.jsxで設定した:id
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterページ</h1>
      <p>パラメータは{id}</p>
    </div>
  );
};
