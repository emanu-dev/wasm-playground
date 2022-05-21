import React, { useCallback, useState } from "react";
import Operations from './Operations';
import OperationsWASM from './Operations.wasm';
import './App.scss';

export const App = props => {

  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [result, setResult] = useState(0);

  const operations = Operations({
    locateFile: () => {
      return OperationsWASM;
    }
  })

  const handleSum = useCallback(() => {
    operations.then((core) => {
      setResult(
        core.add(parseInt(valueA, 10), parseInt(valueB, 10))
      );
    })
  }, [valueA, valueB])

  const handleSubtract = useCallback(() => {
    operations.then((core) => {
      setResult(
        core.subtract(parseInt(valueA, 10), parseInt(valueB, 10))
      );
    })
  }, [valueA, valueB])
  
  const handleMultiply = useCallback(() => {
    operations.then((core) => {
      setResult(
        core.multiply(parseInt(valueA, 10), parseInt(valueB, 10))
      );
    })
  }, [valueA, valueB])
  
  const handleDivide = useCallback(() => {
    if (parseInt(valueB, 10) === 0) return alert('Can\'t divide by zero!!!')

    operations.then((core) => {
      setResult(
        core.divide(parseInt(valueA, 10), parseInt(valueB, 10))
      );
    })
  }, [valueA, valueB])  

  return (
    <div className="application-wrapper">
      <div className="application-container">
        <h1>Boilerplate for WebAssembly using React and C++</h1>
        <h2>Calculation app</h2>
        <div className="input-group">
          <input type="number" value={valueA} onChange={(e) => { setValueA(e.target.value) }} />
          <input type="number" value={valueB} onChange={(e) => { setValueB(e.target.value) }} />
        </div>
        <div className="operations-group">
          <button onClick={handleSum}>Sum</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
        </div>
        <p>Result {result} </p>
      </div>
    </div>
  )
}