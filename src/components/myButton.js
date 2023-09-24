import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';


const specialChars = ['+', '-', '*', '/'];

const ColorPressedOperator = (pressedOperator) => {
    [...specialChars].forEach((char) => {
        if (char === pressedOperator){
            document.getElementById(char).className = "btn_marginal_pressed"
        } else {
            document.getElementById(char).className = "btn_marginal"
        }
       
    })

}

const MyButton = (props) => {
    const { dispatch, calcSetting, calcState } = useContext(AppContext);
    let handleClick = (e) => {
        if(e === 'C') { /* clear button pressed */
            ColorPressedOperator(e)
            dispatch({
                type: 'CLEAR_CONTENT',
                });
            dispatch({
                    type: 'CLEAR_EQUATION',
                    });
            dispatch({
                type: 'SET_CALC_STATE',
                payload: 0,
                });
        }
        else {
            if (calcSetting){
                if (!specialChars.includes(e)){
                    /* cyfra */
                    dispatch({
                        type: 'APPEND_CONTENT',
                        payload: e,
                        });
                    dispatch({
                        type: 'APPEND_EQUATION',
                        payload: e,
                        });

                    if (calcState === 1){
                        dispatch({
                            type: 'SET_CALC_STATE',
                            payload: 2,
                            });
                        dispatch({
                            type: 'CLEAR_CONTENT',
                            payload: 2,
                            });
                        dispatch({
                            type: 'APPEND_CONTENT',
                            payload: e,
                            });
                    }
                } else {
                    /* operator */
                    ColorPressedOperator(e);
                    if (calcState === 1){ 
                    dispatch({
                        type: 'REPLACE_OPERATOR',
                        payload: e,
                        });

                    } else {
                        dispatch({
                            type: 'SET_CALC_STATE',
                            payload: 1,
                            });
                        dispatch({
                            type: 'APPEND_EQUATION',
                            payload: e,
                            });
                    }

                }

            } else{
                dispatch({
                    type: 'APPEND_CONTENT',
                    payload: e,
                    });
                dispatch({
                    type: 'SET_CALC_STATE',
                    payload: 1,
                    });
            }
        }
    }
    let classO = props.classO
    if (typeof(classO) === 'undefined'){
        classO = 'btn'
    }

    return(
        <button className={classO} id={props.name} onClick={() => handleClick(props.name)}>{props.name}</button>
    )
}
export default MyButton;