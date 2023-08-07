import React, { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import './calculator.css';

const Calculator = () => {

    const [expression, setExpression] = useState('0');
    const [result, setResult] = useState();

    const type = (n) => {
        if (expression == '0') setExpression(n);
        else setExpression(expression + n);
    }

    const clear = () => {
        setExpression('0');
        setResult();
    }

    const cut = () => {
        let s = "";
        for (let i = 0; i < expression.length - 1; i++) s += expression[i];
        if (s == "") s = '0';
        setExpression(s);
    }

    const calculate = () => {
        try {
            setResult(eval(expression));
        } catch (error) {
            alert("not valid expression");
            setExpression('0');
            setResult();
        }
    }

    // light and dark mode

    const [theme, setTheme] = useState('light-theme');
    const toggleTheme = () => {
        if(theme === "dark-theme") {
            setTheme("light-theme");
        }
        else {
            setTheme("dark-theme");
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <div className="container">
            <div className="main">
                <nav className="navbar">
                    <h2>Calculator</h2>
                    <div className="toggle-btn">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="toggle-label" onClick={() => toggleTheme()}>
                            <span className="toggle-ball"></span>
                        </label>
                    </div>
                </nav>
                <div className="calculator">
                    <div className="screen">
                        <h2>{expression}</h2>
                        <h1>{result}</h1>
                    </div>
                    <div className="buttons">
                        <div className="row">
                            <button onClick={() => type('%')}>%</button>
                            <button onClick={() => clear()}>C</button>
                            <button onClick={() => cut()}>X</button>
                            <button onClick={() => type('/')}>/</button>
                        </div>
                        <div className="row">
                            <button onClick={() => type('7')}>7</button>
                            <button onClick={() => type('8')}>8</button>
                            <button onClick={() => type('9')}>9</button>
                            <button onClick={() => type('*')}>*</button>
                        </div>
                        <div className="row">
                            <button onClick={() => type('4')}>4</button>
                            <button onClick={() => type('5')}>5</button>
                            <button onClick={() => type('6')}>6</button>
                            <button onClick={() => type('-')}>-</button>
                        </div>
                        <div className="row">
                            <button onClick={() => type('1')}>1</button>
                            <button onClick={() => type('2')}>2</button>
                            <button onClick={() => type('3')}>3</button>
                            <button onClick={() => type('+')}>+</button>
                        </div>
                        <div className="row">
                            <button onClick={() => type('.')}>.</button>
                            <button onClick={() => type('0')}>0</button>
                            <button className="equal" onClick={() => calculate()}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;