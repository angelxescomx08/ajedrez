import { DragState } from './';

type DragActionType =
    | { type: '[Drag] - set dragging', payload: boolean }
    | { type: '[Drag] - set piece', payload: string }

export const dragReducer = (state: DragState, action: DragActionType): DragState => {
    switch (action.type) {
        case '[Drag] - set dragging':
            return {
                ...state,
                isDragging: action.payload
            }
        case '[Drag] - set piece':
            return {
                ...state,
                piece: action.payload
            }

        default:
            return state;
    }
}