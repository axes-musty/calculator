import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            state.content = action.payload;
            return {
                ...state,
            };
        case 'APPEND_CONTENT':
            
            state.content += action.payload
            return {
                ...state,
            };
        case 'CLEAR_CONTENT':
            
            state.content = ''
            return {
                ...state,
            };
        case 'REPLACE_OPERATOR':
            
            [...state.equation][String(state.equation).length()] = action.payload
            return {
                ...state,
            };
        case 'SET_CALC_STATE':
            console.log('PRZED calcState:' + state.calcState)
            state.calcState = action.payload
            console.log('PO calcState:' + state.calcState)
            return {
                ...state,
            };
        case 'SET_EQUATION':
            state.equation = action.payload;
            return {
                ...state,
            };
        case 'APPEND_EQUATION':
            state.equation += action.payload;
            return {
                ...state,
            };
        case 'CLEAR_EQUATION':
            state.equation = '';
            return {
                ...state,
            };
            default:
                return state;
        case 'SET_LAST_OPERATION':
            state.lastOperation = action.payload;
            return {
                ...state,
            };
        case 'CLEAR_LAST_OPERATION':
            state.lastOperation = '';
            return {
                ...state,
            };
    }
}

export const AppContext = createContext();
const initialState = {
    content: '',
    calcState: 0, /* 0 - stan bez inputu, 1 - stan z wpisanym operatorem 2 - stan gotowy do obliczenia 3 - powtorzenie ostaniej operacji*/
    calcSetting: true,
    equation: '',
    lastOperation: '',
}
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider
            value={{
                content: state.content,
                calcState: state.calcState,
                calcSetting: state.calcSetting,
                equation: state.equation,
                lastOperation: state.lastOperation,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}