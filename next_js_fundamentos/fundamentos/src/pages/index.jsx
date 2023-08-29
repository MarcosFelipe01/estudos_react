import Navegador from "../components/Navegador"


export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap:'wrap',
            height: '100vh',
        }}>
            <Navegador destino="/estiloso" nome='Estiloso' cor='red' />
            <Navegador destino="/exemplo" nome='Exemplo' cor='green' />
            <Navegador destino="/jsx" nome='JSX'/>
            <Navegador destino="/navegacao" nome='Navegacao #01' cor='pink'/>
            <Navegador destino="/cliente/pr-2/123" nome='Navegacao Dinânimca' cor='black'/>
            <Navegador destino="/estado" nome='Estado' cor='purple'/>
            <Navegador destino="/integracao_1" nome='Integracao 01' cor='crimson'/>
        </div>
    )
}