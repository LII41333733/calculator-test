import React, { useState } from 'react';
import { calculateResult } from '../Functions/CalcFunctions';

const Calculator = () => {
    const styling = {
        width: "30%",
        border: "2px solid black",
        borderRadius: "5px",
    }

    const initialValues = {
        first: "",
        second: "",
        res: "",
        op: ""
    }

    const [firstValue, setFirstValue] = useState(initialValues.first);
    const [secondValue, setSecondValue] = useState(initialValues.second);
    const [operator, setOperator] = useState(initialValues.op);
    const [result, setResult] = useState(initialValues.res);
    const whichValue = !operator ? firstValue : secondValue;
    const setWhichValue = !operator ? setFirstValue : setSecondValue;
    const operators = ["x", "/", "-", "+"];
    const resetValues = () => {
        const {
            first,
            second,
            res,
            op
        } = initialValues;
        setFirstValue(first);
        setSecondValue(second);
        setOperator(op);
        setResult(res);
    }

    const enterCalcValue = (e) => {
        const { target: { value } } = e;
        if (value === "C") {
            resetValues();
        } else if (value === "=" && !secondValue) {
            return false;
        } else if (value === "=" && secondValue) {
            setResult(calculateResult(firstValue, secondValue, operator));
        } else if (operators.includes(value)) {
            setOperator(value);
        } else {
            setWhichValue(String(whichValue).concat('', value))
        }
    }

    return <div style={styling}>
        <CalculatorDisplay>
            <CalculatorDisplayField value={firstValue} />
            <CalculatorDisplayField value={operator} isOperator={true} />
            <CalculatorDisplayField value={secondValue} />
            <hr />
            <CalculatorDisplayField value={result} />
        </CalculatorDisplay>
        <CalculatorButtons>
            <CalculatorRow>
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="C" />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="1" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="2" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="3" />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="4" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="5" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="6" />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="7" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="8" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="9" />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="+" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="-" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="/" />
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="x" />
            </CalculatorRow>
            <CalculatorRow>
                <CalculatorButton
                    onClick={enterCalcValue}
                    value="=" />
            </CalculatorRow>
        </CalculatorButtons>
    </div>
}

export default Calculator;

const CalculatorDisplay = ({ children }) => {
    const styling = {
        margin: "10px",
        padding: "10px",
        height: "150px",
        border: "1px solid grey",
        borderRadius: "5px",
        textAlign: "center"
    }
    return <div style={styling}>{children}</div>
}

const CalculatorDisplayField = ({ value, isOperator = false }) => {
    const styling = {
        margin: "10px auto",
        lineHeight: "18px",
        height: "22px",
        border: isOperator ? "1px solid #005fcc" : "2px solid black",
        width: isOperator ? "25px" : "100%",
    }
    console.log(styling)
    return <div style={styling}>{value}</div>
}

const CalculatorButtons = ({ children }) => {
    const styling = {
        margin: "10px",
        padding: "10px",
        border: "1px solid grey",
        borderRadius: "5px",
    }
    return <div style={styling}>{children}</div>
}

const CalculatorRow = ({ children }) => {
    const styling = {
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

    }
    const childrenArr = React.Children.toArray(children);
    const length = childrenArr.length;
    const mapped = React.Children.map(children, child => {
        let width;
        switch (length) {
            case 1:
                width = "100%";
                break;
            case 2:
                width = "50%";
                break;
            case 3:
                width = "30%";
                break;
            case 4:
            default:
                width = "20%";
                break;
        }

        return React.cloneElement(child, {
            width,
        });
    });
    return <div style={styling}>{mapped}</div>
}

const CalculatorButton = ({ value, width = "100%", onClick = () => false }) => {
    console.log(onClick)
    const styling = {
        borderRadius: "5px",
        width: width
    }
    return <button onClick={onClick} style={styling} value={value} >{value}</button>
}