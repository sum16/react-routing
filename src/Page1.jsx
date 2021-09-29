import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="page1/detailA">ページAの詳細</Link>
      <br />
      <Link to="page1/detailB">ページBの詳細</Link>
    </div>
  );
};
