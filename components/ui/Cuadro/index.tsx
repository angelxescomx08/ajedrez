import { FC, DragEvent } from 'react';
import { motion } from 'framer-motion'
import styles from './styles.module.css'

interface Props {
  children?: JSX.Element;
  color: string;
  id: string;
}

export const Cuadro: FC<Props> = ({ color, children, id }) => {

  const onDrop = (e:DragEvent<HTMLDivElement>) => {
    console.log(e)
  }

  const onDragOver = (e:DragEvent<HTMLDivElement>) => {
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
