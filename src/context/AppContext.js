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
        case 'SET_CALC_STATE':
            state.calcState = action.payload
        default:
            return state;
    }
}

export const AppContext = createContext();
const initialState = {
    content: '',
    calcState: 0, /* 0 - stan startowy wyswietla placeholder, 1 - stan wpisywania, 2 - stan wyniku */
}
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider
            value={{
                content: state.content,
                calcState: state.calcState,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}