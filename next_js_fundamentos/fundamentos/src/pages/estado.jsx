import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    const [numero, setNumero] = useState(0)

    function Incrementar(){
        setNumero(numero + 1)
    }
    
    return(
        <Layout titulo='Componente com Estado'>
            <span>{numero}</span>
            <button onClick={() => Incrementar()}>Incrementar</button>
        </Layout>    
    )
}