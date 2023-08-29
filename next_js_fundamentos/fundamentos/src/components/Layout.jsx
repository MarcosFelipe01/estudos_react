
import Navegador from './Navegador'
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Teste'}</h1>
                <Navegador destino="/" nome='Voltar' cor='crimson' />
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}