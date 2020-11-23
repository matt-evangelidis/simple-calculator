import React, { useState } from 'react';

export const Calculator: React.FC = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState<number[]>([]);
    const [history, setHistory] = useState<number[]>([]);

    const setExpression = (text: string) => {
        if (operator !== "") {
            setNumber2(number2 + text)
        }
        else {
            setNumber1(number1 + text)
        }
    }

    const setOperation = (text: string) => {
        if (number1 === "") {
            setOperator("")
        }
        else {
            setOperator(text)
        }
    }

    const resolveEquation = () => {
        if (number1 === "" || operator === "" || number2 === "") {
            return
        }
        const x = parseFloat(number1)
        const y = parseFloat(number2)
        if (operator === "+") {
            const temp = [x + y]
            setResult(temp)
            clearCalc()
        }
        if (operator === "-") {
            const temp = [x - y]
            setResult(temp)
            clearCalc()
        }
        if (operator === "*") {
            const temp = [x * y]
            setResult(temp)
            clearCalc()
        }
        if (operator === "/") {
            const temp = [x / y]
            setResult(temp)
            clearCalc()
        }
    }

    const clearCalc = () => {
        setNumber1("")
        setNumber2("")
        setOperator("")

        console.log("Result", result)
        const tempHistory = history

        if (result[0] !== undefined) {
            tempHistory.push(result[0])
        }
        //tempHistory.concat(result)
        setHistory(tempHistory)
        console.log("History", history)
    }

    const historyList = history.map((h) => {
        return <li>{h}</li>
    })
    
    return(
        <div>
            <p>Equation: {number1} {operator} {number2}</p>
            <p>Result: {result[0]}</p>
            <button onClick={() => setExpression("1")}>1</button>
            <button onClick={() => setExpression("2")}>2</button>
            <button onClick={() => setExpression("3")}>3</button>
            <button onClick={() => setExpression("4")}>4</button>
            <button onClick={() => setExpression("5")}>5</button>
            <button onClick={() => setExpression("6")}>6</button>
            <button onClick={() => setExpression("7")}>7</button>
            <button onClick={() => setExpression("8")}>8</button>
            <button onClick={() => setExpression("9")}>9</button>
            <button onClick={() => setExpression("0")}>0</button>
            <button onClick={() => setExpression(".")}>.</button>
            <br/>
            <button onClick={() => setOperation("+")}>+</button>
            <button onClick={() => setOperation("-")}>-</button>
            <button onClick={() => setOperation("*")}>*</button>
            <button onClick={() => setOperation("/")}>/</button>
            <button onClick={() => resolveEquation()}>=</button>
            <p>Result History:</p>
            <ul>{historyList}</ul>
            {/* <p>Equation: {numberString}</p>
            <CalcButton value={1}/>
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
            <CalcButton value={"="}/> */}
        </div>
    );
}