import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/100">URLパラメーター</Link>
      <br />
      <Link to="/page2/800?name=hogehoge">クエリパラメーター</Link>
    </div>
  );
};
