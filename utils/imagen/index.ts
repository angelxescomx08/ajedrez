import alfilBlanca from '../../public/assets/img/alfil-blanca.png';
import alfilNegra from '../../public/assets/img/alfil-negra.png';
import caballoBlanca from '../../public/assets/img/caballo-blanca.png';
import caballoNegra from '../../public/assets/img/caballo-negra.png';
import damaBlanca from '../../public/assets/img/dama-blanca.png';
import damaNegra from '../../public/assets/img/dama-negra.png';
import peonBlanca from '../../public/assets/img/peon-blanca.png';
import peonNegra from '../../public/assets/img/peon-negra.png';
import reyBlanca from '../../public/assets/img/rey-blanca.png';
import reyNegra from '../../public/assets/img/rey-negra.png';
import torreBlanca from '../../public/assets/img/torre-blanca.png';
import torreNegra from '../../public/assets/img/torre-negra.png';

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