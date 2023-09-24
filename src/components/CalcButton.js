/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../context/AppContext'
import CalcResult from './CalcResult'

const CalcButton = (props) => {
  const { calcState, dispatch, equation, lastOperation } = useContext(AppContext)
  const specialChars = ['+', '-', '*', '/']
  let localLastOperation = ''
  let localResult = 0
  const handleClick = () => {
    switch (calcState) {
      case 0:
        break
      case 1:
        break
      case 2:
        localResult = CalcResult(equation)
        dispatch({
          type: 'SET_CONTENT',
          payload: localResult
        })
        dispatch({
          type: 'SET_EQUATION',
          payload: localResult
        });
        [...specialChars].forEach((char) => {
          if ([...equation].includes(char)) {
            localLastOperation = equation.slice([...equation].indexOf(char))
          }
        })
        dispatch({
          type: 'SET_LAST_OPERATION',
          payload: localLastOperation
        })

        dispatch({
          type: 'SET_CALC_STATE',
          payload: 3
        })
        break
      case 3:
        localResult = CalcResult(equation + lastOperation)
        dispatch({
          type: 'SET_CONTENT',
          payload: localResult
        })
        dispatch({
          type: 'SET_EQUATION',
          payload: localResult
        })
        break
      default:
        console.log('Unhandled CalcState in CalcButton - value = ' + calcState)
        break
    }
  }
  let classO = props.classO
  if (typeof (classO) === 'undefined') {
    classO = 'btn'
  }

  return (
        <button className={classO} onClick={() => handleClick()}>=</button>
  )
}
export default CalcButton
