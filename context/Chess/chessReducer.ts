import { ChessState } from './';

type ChessActionType =
    | { type: '[Chess] - ActionName' }

export const chessReducer = (state: ChessState, action: ChessActionType): ChessState => {
    switch (action.type) {
        case '[Chess] - ActionName':
            return {
                ...state,
            }

        default:
            return state;
    }
}