import { useContext } from 'react'
import { DragContext, ChessContext } from '../../../context';
import { Cuadro, Pieza } from "../";


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
                                <Pieza square={square} />
                                : <></>
                        }
                    </Cuadro>
                ))
            }
        </div>
    )
}
