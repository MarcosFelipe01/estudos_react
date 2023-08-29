'use client';
import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Marcos', 22, '1'),
    new Cliente('Thiago', 22, '2'),
    new Cliente('Gabriel', 27, '3'),
    new Cliente('Lucas', 29, '4'),
    new Cliente('Igor', 55, '4'),
    new Cliente('Pedro', 35, '5')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-orange-400 to-orange-600
      text-white 
    `}>
      <Layout titulo='Cadastro Simples de Desenvolvedores'>
        <Botao cor='gray'>Novo Cliente</Botao>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>    
      </Layout>
    </div>
  )
}
