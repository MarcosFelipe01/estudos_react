import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";

export default function ClienteProCodigo(){
    const router = useRouter()
    return(
        <Layout titulo="Navegação dinâmica">
            <div>Codigo = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}