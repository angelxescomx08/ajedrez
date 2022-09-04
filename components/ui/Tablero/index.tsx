import { Cuadro } from "../Cuadro";

import styles from './styles.module.css';

const filas = [1, 2, 3, 4, 5, 6, 7, 8];
const columnas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


export const Tablero = () => {
    return (
        <div className={styles.tablero}>
            {
                filas.map((fila,i) => (
                    columnas.map((columna,j) => (
                        <Cuadro key={`${fila}${columna}`} 
                            color={ (i+j)%2 === 0 ? '#fff' : '#000'}/>
                    ))
                ))
            }
        </div>
    )
}
