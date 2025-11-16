import React, { createContext, ReactNode, useReducer } from 'react';

// 1. Define el tipo de tu estado
type State = {
    alumnos: String[];
    proyectos: String[];
};

// 2. Define tus acciones
export type Action =
    | { type: "addAlumn" ; payload: String }
    | { type: "deleteAlumn" ; payload: String }
    | { type: "addProject" ; payload: String }
    | { type: "deleteProject" ; payload: String };

// 3. Define el estado inicial
const initialState: State = {
    alumnos: [],
    proyectos: [],
};

// 4. Crea el reducer (tu lógica)
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "addAlumn":
            return { ...state, alumnos: [...state.alumnos, action.payload] };
        case "deleteAlumn":
            return { ...state, alumnos: state.alumnos.filter((item) => item != action.payload) };
        case "addProject":
            return { ...state, proyectos: [...state.proyectos, action.payload]};
        case "deleteProject":
            return { ...state, proyectos: state.proyectos.filter((item) => item != action.payload)};
        default:
            return state;
    }
}

// 5. Crea el Contexto
type AppContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

// 6. Crea el Proveedor (Provider)
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};