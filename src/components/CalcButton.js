import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';

const CalcButton = (props) => {
    const { calcState, content, dispatch } = useContext(AppContext);

    let Calculate = (localContent) => {
        const specialChars = ['+', '-', '*', '/'];
        let result = 0;
        let next_operation = '';
        [...localContent].forEach(char => {
            console.log('char = ' + char)
            if (specialChars.includes(char)){
                next_operation = char
            }
            else if (next_operation === ''){
                if (result === 0){
                    console.log(result)
                    result = parseInt(char)

                } else {
                    result = parseInt(String(result) + char)
                }
            } else {
                let nb = parseInt(char)
                switch (next_operation) {
                    case '+': 
                        result += nb
                        break
                    case '-': 
                        result -= nb
                        break
                    case '*': 
                        result *= nb
                        break
                    case '/': 
                        result /= nb
                        break
                    default:
                        alert("Nie rozpoznany operator " + char)
                }
                next_operation = ''
            }
        });

    return(result);   
    }
    let handleClick = () => {
        switch (calcState){
            case 0:
                alert ("Wpisz działanie do obliczenia!")
                break
            case 1:
                dispatch({
                    type: 'SET_CONTENT',
                    payload: Calculate(content),
                });
                dispatch({
                    type: 'SET_CALC_STATE',
                    payload: 2,
                });
                break   
            case 2:
                dispatch({
                    type: 'SET_CONTENT',
                    payload: '',
                });
                dispatch({
                    type: 'SET_CALC_STATE',
                    payload: 0,
                });
                break   

        }
    }
    return(
        <button class="btn" onClick={() => handleClick()}>=</button>
    )
}
export default CalcButton;