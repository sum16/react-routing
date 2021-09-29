import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  // console.log(location);  stateに渡された値が入っている (arr)
  const history = useHistory();

  const onClickBack = () => {
    history.goBack(); // goBackで戻る処理
  };
  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
