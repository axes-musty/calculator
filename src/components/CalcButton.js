import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';
import CalcResult from './CalcResult';

const CalcButton = (props) => {
    const { calcState, content, dispatch, equation } = useContext(AppContext);

    let handleClick = () => {
        switch (calcState){
            case 0:
                alert ("Wpisz działanie do obliczenia!")
                break
            case 1:
                alert ("Wpisz operator!")
                break
            case 2:
                let localResult = CalcResult(equation)
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