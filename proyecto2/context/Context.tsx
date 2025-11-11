import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useReducer } from 'react'

type State = {
    alumnos: String[];
    proyectos: String[];
};

export type Action =
    | { type: "addAlumn" ; payload: String }
    | { type: "deleteAlumn" ; payload: String }
    | { type: "addProject" ; payload: String }
    | { type: "delteProject" ; payload: String }

const initialState: State = {
    alumnos: [],
    proyectos: [],
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "addAlumn":
            return { ...state, alumnos: [...state.alumnos, action.payload] };
        case "deleteAlumn":
            return { ...state, alumnos: state.alumnos.filter((item) => item != action.payload) };
        case "addProject":
            return { ...state, proyectos: [...state.proyectos, action.payload]};
        case "delteProject":
            return { ...state, proyectos: state.proyectos.filter((item) => item != action.payload)};
        default:
            return state;
    }
}

type AppContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

