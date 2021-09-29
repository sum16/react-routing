import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  // console.log(arr);
  const history = useHistory();

  const onClickDetailA = () => {
    history.push("page1/detailB");
  };
  return (
    <div>
      <h1>Page1</h1>
      {/* stateを使って値を渡せる 遷移先でuseLocationを使って取得できる */}
      <Link to={{ pathname: "page1/detailA", state: arr }}>ページAの詳細</Link>
      <br />
      <Link to="page1/detailB">ページBの詳細</Link>
      <br />
      {/* jsを使って実装 */}
      <button onClick={onClickDetailA}>ページAの詳細</button>
    </div>
  );
};

// ボタンからリンクを飛ばしたい場合はuseHistoryを使えば良さそう
