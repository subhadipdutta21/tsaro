import React, { useReducer, useContext } from 'react'

const initialState = {
    mode: 'dark',
    user: {             //sample user data to check provider functionality
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"        
    }
}

export const AppStateContext = React.createContext(initialState)
export const AppDispatchContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }
}




export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                {children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    )
}


export const useDetails = () => useContext(AppStateContext)
export const useDispatchDetails = () => useContext(AppDispatchContext)
