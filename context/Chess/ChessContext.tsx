import { createContext } from 'react';
import chess from 'chess';

interface ContextProps {
    gameClient: chess.AlgebraicGameClient;
    getStatus: () => chess.AlgebraicGameStatus
}

export const ChessContext = createContext({} as ContextProps);