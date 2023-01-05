import { motion } from 'framer-motion'


import chess from 'chess';

import { Cuadro } from "../Cuadro";

import styles from './styles.module.css';

import { obtenerImagen } from '../../../utils';

const gameClient = chess.create();
let move;
let status = gameClient.getStatus();

export const Tablero = () => {
    console.log(status);
    return (
        <div className={styles.tablero}>
            {
                [...status.board.squares].reverse().map((square, i) => (
                    <Cuadro 
                        id={`${square.file}${square.rank}`} 
                        key={i}
                        color={(i + square.rank ) % 2 === 0 ? '#fff' : '#000'}
                        >
                        {
                            square.piece ?
                                <motion.img
                                    id={`${square.piece.type}-${square.piece.side.name}`}
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
