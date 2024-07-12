import React, { createContext, useReducer } from 'react';

const initialState = null;

const UserContext = createContext(initialState);

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };