import { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  children?: JSX.Element;
  color: string;
}

export const Cuadro: FC<Props> = ({ color, children }) => {
  return (
    <div className={styles.cuadro} style={{ backgroundColor: color }}>
      {children}
    </div>
  )
}
