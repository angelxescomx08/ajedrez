import { motion } from 'framer-motion'


import chess from 'chess';

import { Cuadro } from "../Cuadro";

import styles from './styles.module.css';

import { tablero, obtenerImagen } from '../../../utils';

const filas = [1, 2, 3, 4, 5, 6, 7, 8];
const columnas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


export const Tablero = () => {

    const gameClient = chess.create();
    let move, status;
    status = gameClient.getStatus();

    console.log(status);

    return (
        <div className={styles.tablero}>
            {
                [...status.board.squares].reverse().map((square, i) => (
                    <Cuadro key={i} color={(i + square.rank ) % 2 === 0 ? '#fff' : '#000'}>
                        {
                            square.piece ?
                                <motion.img
                                    className={styles.img}
                                    src={obtenerImagen(square.piece.type, square.piece.side.name)}
                                    alt=""
                                />
                                : <></>
                        }
                    </Cuadro>
                ))
            }
        </div>
    )
}
