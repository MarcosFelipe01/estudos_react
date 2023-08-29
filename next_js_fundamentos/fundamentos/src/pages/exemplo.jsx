import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    //props é somente leitura
    return (
        <Layout titulo='Exemplo'>
            <Cabecalho titulo='Next js' />
            <Cabecalho titulo='Fundamentos do Next.js' />
        </Layout>
    )
}