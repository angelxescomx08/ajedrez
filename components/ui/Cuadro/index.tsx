import { FC, DragEvent, useContext } from 'react';
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { DragContext } from '../../../context/Drag/DragContext';
import { ChessContext } from '../../../context/Chess/ChessContext';
import { conversor } from '../../../utils/notacion-chess/index';

interface Props {
  children?: JSX.Element;
  color: string;
  id: string;
}

export const Cuadro: FC<Props> = ({ color, children, id }) => {

  const { gameClient } = useContext(ChessContext)
  const { piece, setDragging, setPiece } = useContext(DragContext)

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    console.log(piece, id)
    setPiece('')
    setDragging(false)
    gameClient.move(conversor(piece, id));
  }

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <motion.div
      id={id}
      className={styles.cuadro}
      style={{ backgroundColor: color }}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {children}
    </motion.div>
  )
}
