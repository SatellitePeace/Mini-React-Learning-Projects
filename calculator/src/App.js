import { useState } from "react";
import Theme from "./Theme";

function App() {
  const [result, setResult] = useState("");

  //get btn value function
  const handleClick = (e) => {
    setResult(result.concat(e.target.value.replace));
  };
  // function to delete last digit
  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  // clear all / reset function
  const handleReset = () => {
    setResult("");
  };
  // function to calculate result
  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };
  return (
    <>
      <Theme />
      <main className="calculator">
        <form className="output">
          <input
            type="text"
            className="result"
            placeholder="0"
            value={result}
            disabled={true}
          />
        </form>
        <section className="btns">
          <button onClick={handleClick} value="7">
            7
          </button>
          <button onClick={handleClick} value="8">
            8
          </button>
          <button onClick={handleClick} value="9">
            9
          </button>
          <button className="del" onClick={handleDelete}>
            DEL
          </button>
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} value="6">
            6
          </button>
          <button onClick={handleClick} value="+">
            +
          </button>
          <button onClick={handleClick} value="1">
            1
          </button>
          <button onClick={handleClick} value="2">
            2
          </button>
          <button onClick={handleClick} value="3">
            3
          </button>
          <button onClick={handleClick} value="-">
            -
          </button>
          <button onClick={handleClick} value=".">
            .
          </button>
          <button onClick={handleClick} value="0">
            0
          </button>
          <button onClick={handleClick} value="/">
            /
          </button>
          <button onClick={handleClick} value="*">
            X
          </button>
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
          <button className="equals" onClick={handleCalculate}>
            =
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
