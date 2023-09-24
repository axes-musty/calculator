import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';
import CalcResult from './CalcResult';

const CalcButton = (props) => {
    const { calcState, content, dispatch, equation, lastOperation } = useContext(AppContext);
    const specialChars = ['+', '-', '*', '/'];
    let localLastOperation = ''
    let localResult = 0
    let handleClick = () => {
        switch (calcState){
            case 0:
                alert ("Wpisz działanie do obliczenia!")
                break
            case 1:
                alert ("Wpisz operator!")
                break
            case 2:
                localResult = CalcResult(equation)
                dispatch({
                    type: 'SET_CONTENT',
                    payload: localResult,
                });
                dispatch({
                    type: 'SET_EQUATION',
                    payload: localResult,
                });
                [...specialChars].forEach((char) => {
                    if([...equation].includes(char)){
                        localLastOperation = equation.slice([...equation].indexOf(char))
                    }
                })
                dispatch({
                    type: 'SET_LAST_OPERATION',
                    payload: localLastOperation,
                });

                dispatch({
                    type: 'SET_CALC_STATE',
                    payload: 3,
                    });
                break 
            case 3:
                console.log('tutaj')
                console.log(equation+lastOperation)
                localResult = CalcResult(equation+lastOperation)
                dispatch({
                    type: 'SET_CONTENT',
                    payload: localResult,
                });
                dispatch({
                    type: 'SET_EQUATION',
                    payload: localResult,
                });
                break
            default:
                break
        }
    }
    let classO = props.classO
    if (typeof(classO) === 'undefined'){
        classO = 'btn'
    }

    return(
        <button className={classO} onClick={() => handleClick()}>=</button>
    )
}
export default CalcButton;