import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>404エラー</h1>
      <p>ページが見つかりません</p>
      <Link to="/">戻る</Link>
    </div>
  );
};
