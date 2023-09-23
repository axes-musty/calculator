import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';

const MyButton = (props) => {
    const { dispatch, calcSetting, equation, calcState } = useContext(AppContext);
    const specialChars = ['+', '-', '*', '/'];
    let handleClick = (e) => {
        if(e === 'C') {
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
            console.log('calcState:' + calcState)
            if (calcSetting){
                if (!specialChars.includes(e)){
                    console.log('cyfra')
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
                    console.log('operator')
                    /* operator */
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
        <button className={classO} onClick={() => handleClick(props.name)}>{props.name}</button>
    )
}
export default MyButton;