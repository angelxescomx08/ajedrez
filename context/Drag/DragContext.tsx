import { createContext } from 'react';

interface ContextProps {
    isDragging: boolean;
    piece: any;
    setDragging: (v: boolean) => void;
    setPiece: (v: any) => void;
}

export const DragContext = createContext({} as ContextProps);