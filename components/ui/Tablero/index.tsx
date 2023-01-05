import { useContext } from 'react'
import { motion } from 'framer-motion'
import chess from 'chess';

import { DragContext } from '../../../context/Drag/DragContext';
import { obtenerImagen } from '../../../utils';

import { Cuadro } from "../Cuadro";


import styles from './styles.module.css';

const gameClient = chess.create();
let move;
let status = gameClient.getStatus();

console.log(status);
export const Tablero = () => {
    const { setDragging, setPiece } = useContext(DragContext)
    return (
        <div className={styles.tablero}>
            {
                [...status.board.squares].map((square, i) => (
                    <Cuadro
                        id={`${square.file}${square.rank}`}
                        key={i}
                        color={(i + square.rank) % 2 === 0 ? '#fff' : '#000'}
                    >
                        {
                            square.piece ?
                                <motion.img
                                    id={`${square.piece.type}-${square.piece.side.name}`}
                                    onDragCapture={() => {
                                        setDragging(true)
                                        setPiece(`${square.piece.type}-${square.piece.side.name}`)
                                    }}
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
