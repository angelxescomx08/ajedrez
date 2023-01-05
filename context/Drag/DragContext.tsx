import { createContext } from 'react';

interface ContextProps {
    isDragging: boolean;
    piece: string;
    setDragging: (v: boolean) => void;
    setPiece: (v: string) => void;
}

export const DragContext = createContext({} as ContextProps);