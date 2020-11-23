import './App.css';
import React from 'react';
import {Test} from './components/Test';
import { Calculator } from './components/Calculator';
import { CalcButton } from './components/CalcButton';

function App() {
  return (
    <div >
      To paraphrase Anakain Skywalker, this is where the app begins
      <Calculator/>
        {/* {(numberString, setNumber) => (
        <div>
          <p>Equation: {numberString}</p>
          <CalcButton value={1} fn={() => setNumber}/>
          <CalcButton value={2}/>
          <CalcButton value={3}/>
          <CalcButton value={4}/>
          <CalcButton value={5}/>
          <CalcButton value={6}/>
          <CalcButton value={7}/>
          <CalcButton value={8}/>
          <CalcButton value={9}/>
          <CalcButton value={0}/>
          <br/>
          <CalcButton value={"+"}/>
          <CalcButton value={"-"}/>
          <CalcButton value={"*"}/>
          <CalcButton value={"/"}/>
          <CalcButton value={"="}/>
        </div>
        )} */}
    </div>
  );
}

export default App;
