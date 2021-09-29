import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location); // stateに渡された値が入っている (arr)

  return (
    <div>
      <h1>Page1DetailA</h1>
    </div>
  );
};
