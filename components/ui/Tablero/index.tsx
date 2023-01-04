import {motion} from 'framer-motion'


import { Cuadro } from "../Cuadro";

import styles from './styles.module.css';

import { tablero, obtenerImagen } from '../../../utils';

const filas = [1, 2, 3, 4, 5, 6, 7, 8];
const columnas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


export const Tablero = () => {
    return (
        <div className={styles.tablero}>
            {
                tablero.map((fila, i) => (
                    fila.map((pieza, j) => (
                        <Cuadro key={`${filas[i]}${columnas[j]}`}
                            color={(i + j) % 2 === 0 ? '#fff' : '#000'}>
                            {obtenerImagen(pieza) ?
                                <motion.img className={styles.img} src={obtenerImagen(pieza)} alt="" />
                                : <></>}
                        </Cuadro>
                    ))
                ))
            }
        </div>
    )
}
