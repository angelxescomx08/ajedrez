import { FC, useReducer } from 'react';
import { ChessContext, chessReducer } from './';
import chess from 'chess';

interface Props {
    children: JSX.Element
}

export interface ChessState {
    gameClient: chess.AlgebraicGameClient;
}

const Chess_INITIAL_STATE: ChessState = {
    gameClient: chess.create(),
}

export const ChessProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(chessReducer, Chess_INITIAL_STATE)

    const getStatus = () => state.gameClient.getStatus()

    return (
        <ChessContext.Provider value={{
            ...state,
            //metodos
            getStatus
        }}>
           {children}
        </ChessContext.Provider>
    )
}   