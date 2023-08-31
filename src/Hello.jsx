import { useState } from "react";

const Hello = () => {
  const [point, setPoint] = useState(0);

    const incrFunc = () => {
        setPoint(point + 1)
    }
    const decrFunc = () => {
        setPoint(point - 1)
    }

  return (
    <div>
      <h1>React</h1>
      <button point={point} onClick={incrFunc}>+1</button>
      <button point={point} onClick={decrFunc}>-1</button>
      <p>{point}</p>
    </div>
  );
};

export default Hello;
