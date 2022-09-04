import { FC } from 'react';
import styles from './styles.module.css';

interface Props{
    color: string;
}

export const Cuadro:FC<Props> = ({color}) => {
  return (
    <div className={styles.cuadro} style={{backgroundColor: color}}>

    </div>
  )
}
