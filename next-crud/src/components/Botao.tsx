interface BotaoProps{
    cor: 'green' | 'blue' | 'gray',
    children: any
}

export default function Botao(props: BotaoProps){
    return(
        <button onClick={_ => console.log('1')}>
            {props.children}
        </button>
    )
}