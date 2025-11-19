import { createContext, ReactNode, useReducer } from "react";
import { Coordinate } from "./entities/Coordinate";

type State = {
    gridSize: number
    positiion: Coordinate
    trail: Coordinate[]
    trailDuration: number
    submarineFound: boolean
};



const initialState: State = {
    gridSize: 6,
    positiion: {x: -1, y: -1},
    trail: [],
    trailDuration: 5,
    submarineFound: false
};

export type Action = | {}


function reducer(prevState: State, action: Action): State {
    throw new Error("Function not implemented.");
}

type AppContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};


