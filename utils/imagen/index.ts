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

export const obtenerImagen = (pieza: string) => {
    switch (pieza) {
        case 'v':
            return '';
        case 'ab':
            return alfilBlanca;
        case 'an':
            return alfilNegra;
        case 'cb':
            return caballoBlanca;
        case 'cn':
            return caballoNegra;
        case 'db':
            return damaBlanca;
        case 'dn':
            return damaNegra;
        case 'pb':
            return peonBlanca;
        case 'pn':
            return peonNegra;
        case 'rb':
            return reyBlanca;
        case 'rn':
            return reyNegra;
        case 'tb':
            return torreBlanca;
        case 'tn':
            return torreNegra;
        default:
            return '';
    }
}