import { FC, useReducer } from 'react';
import { DragContext, dragReducer } from './';

interface Props {
    children: JSX.Element
}

export interface DragState {
    isDragging: boolean;
    piece: string;
}

const Drag_INITIAL_STATE: DragState = {
    isDragging: false,
    piece: '',
}

export const DragProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(dragReducer, Drag_INITIAL_STATE)

    const setDragging = (v: boolean) => dispatch({type: '[Drag] - set dragging', payload: v})
    const setPiece = (v: string) => dispatch({type: '[Drag] - set piece', payload: v})

    return (
        <DragContext.Provider value={{
            ...state,
            //metodos
            setDragging,
            setPiece,
        }}>
           {children}
        </DragContext.Provider>
    )
}