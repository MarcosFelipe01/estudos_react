import styles from '../styles/Estiloso.module.css'
import Link from "next/link"
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo='Exemplo de CSS modularizado'>
            <div>
                <h1 className={styles.roxo} >Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}