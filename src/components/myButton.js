import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';

const MyButton = (props) => {
    const { dispatch } = useContext(AppContext);
    let handleClick = (e) => {
        if(e === 'C') {
            dispatch({
                type: 'SET_CONTENT',
                payload: '',
                });
            dispatch({
                type: 'SET_CALC_STATE',
                payload: 0,
                });
        }
        else {
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
    let classO = props.classO
    if (typeof(classO) === 'undefined'){
        classO = 'btn'
    }

    return(
        <button className={classO} onClick={() => handleClick(props.name)}>{props.name}</button>
    )
}
export default MyButton;