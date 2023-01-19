import { useContext } from 'react'
import { motion } from 'framer-motion'

import { DragContext, ChessContext } from '../../../context';
import { obtenerImagen } from '../../../utils';

import { Cuadro } from "../Cuadro";


import styles from './styles.module.css';


export const Tablero = () => {

    const { getStatus } = useContext(ChessContext)
    const { setDragging, setPiece } = useContext(DragContext)

    return (
        <div className={styles.tablero}>
            {
                getStatus().board.squares.map((square, i) => (
                    <Cuadro
                        id={`${square.file}${square.rank}`}
                        key={i}
                        color={(i + square.rank) % 2 === 0 ? '#fff' : '#000'}
                    >
                        {
                            square.piece ?
                                <motion.img
                                    draggable
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
