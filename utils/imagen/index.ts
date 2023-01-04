let alfilBlanca = 'assets/img/alfil-blanca.png';
let alfilNegra = 'assets/img/alfil-negra.png';
let caballoBlanca = 'assets/img/caballo-blanca.png';
let caballoNegra = 'assets/img/caballo-negra.png';
let damaBlanca = 'assets/img/dama-blanca.png';
let damaNegra = 'assets/img/dama-negra.png';
let peonBlanca = 'assets/img/peon-blanca.png';
let peonNegra = 'assets/img/peon-negra.png';
let reyBlanca = 'assets/img/rey-blanca.png';
let reyNegra = 'assets/img/rey-negra.png';
let torreBlanca = 'assets/img/torre-blanca.png';
let torreNegra = 'assets/img/torre-negra.png';

export const obtenerImagen = (pieza: string, color: string) => {
    const clave = `${pieza}-${color}`;
    switch (clave) {
        case 'bishop-white':
            return alfilBlanca;
        case 'bishop-black':
            return alfilNegra;
        case 'knight-white':
            return caballoBlanca;
        case 'knight-black':
            return caballoNegra;
        case 'queen-white':
            return damaBlanca;
        case 'queen-black':
            return damaNegra;
        case 'pawn-white':
            return peonBlanca;
        case 'pawn-black':
            return peonNegra;
        case 'king-white':
            return reyBlanca;
        case 'king-black':
            return reyNegra;
        case 'rook-white':
            return torreBlanca;
        case 'rook-black':
            return torreNegra;
        default:
            return '';
    }
}