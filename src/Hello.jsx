import { useState } from "react";

const Hello = () => {
  const [point, setPoint] = useState(0);

  const incrFunc = () => {
    setPoint((prev) => prev + 1);
  };
  const decrFunc = () => {
    setPoint((prev) => prev - 4);
  };

  return (
    <div>
      <h1>React</h1>
      <button point={point} onClick={incrFunc}>
        +1
      </button>
      <button point={point} onClick={decrFunc}>
        -1
      </button>
      <p>{point}</p>
    </div>
  );
};

export default Hello;
