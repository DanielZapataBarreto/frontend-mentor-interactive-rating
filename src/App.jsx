import { useState } from "react";
import Principal from "./pages/Principal";
import ThankYou from "./pages/ThankYou";

const App = () => {
  const [isPrincipal, setIsPrincipal] = useState(true);
  const [number, setNumber] = useState(null);

  const submitHandler = (number) => {
    setNumber(number);
    setIsPrincipal(false);
  };

  return (
    <main>
      {isPrincipal && !number ? (
        <Principal onSubmit={submitHandler} />
      ) : (
        <ThankYou number={number} />
      )}
    </main>
  );
};

export default App;
