import { createContext, ReactNode, useReducer } from "react";
import { Cell } from "./entities/Cell";


type State = {
    gridSize: number
    positiion: Cell
    trail: Cell[]
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

export type Action = 
    | {type: 'NEW GAME' ; payload: {gridSize: number, trailDuration: number}}


function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'NEW GAME':
            const { gridSize, trailDuration} = action.payload;
            return {...state, gridSize, trailDuration}

    }
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


