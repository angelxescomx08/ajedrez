export type Pieza = 'pawn-white' |
    'pawn-black' |
    'rook-white' |
    'rook-black' |
    'knight-white' |
    'knight-black' |
    'bishop-white' |
    'bishop-black' |
    'queen-white' |
    'queen-black' |
    'king-white' |
    'king-black'

const notacion = {
    'pawn-white': '',
    'pawn-black': '',
    'rook-white': 'R',
    'rook-black': 'R',
    'knight-white': 'N',
    'knight-black': 'N',
    'bishop-white': 'B',
    'bishop-black': 'B',
    'queen-white': 'Q',
    'queen-black': 'Q',
    'king-white': 'K',
    'king-black': 'K',
}

export const conversor = (pieza: Pieza, casilla: string) => {
    return notacion[pieza]+casilla
}