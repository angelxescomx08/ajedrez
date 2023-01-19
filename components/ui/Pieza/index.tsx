import { FC } from 'react';
import { motion, PanInfo } from 'framer-motion'
import { obtenerImagen } from '../../../utils'
import Chess from 'chess'
import styles from './styles.module.css'

interface Props {
    square: Chess.Square;
}

export const Pieza: FC<Props> = ({ square }) => {

    function handleDragEnd(event: MouseEvent, info: PanInfo) {
        // Obtener la posición final de la pieza de ajedrez después de haber sido soltada
        const { x, y } = info.point

        // Calcular en qué casilla se encuentra la pieza de ajedrez
        const squareSize = 75 // Asumimos que cada casilla del tablero tiene un tamaño de 50px
        const column = Math.floor(x / squareSize)
        const row = Math.floor(y / squareSize)
        const square = `${String.fromCharCode(97 + column)}${8 - row}`

        console.log(`Pieza soltada en la casilla ${square}`)
    }

    return (
        <motion.img
            id={`${square.piece.type}-${square.piece.side.name}`}
            className={styles.img}
            drag
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            src={obtenerImagen(square.piece.type, square.piece.side.name)}
            alt=""
        />
    )
}
