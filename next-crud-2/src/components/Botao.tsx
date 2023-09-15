interface BotaoProps{
    cor: 'green' | 'orange' | 'purple',
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'purple'
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-500 to-${cor}-600
            text-white p-4 py-2 mb-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}