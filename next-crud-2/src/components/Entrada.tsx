interface EntradaProps{
    text: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className ?? ''}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                type={props.tipo ?? 'text'} 
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-orange-500 rounded-lg
                    bg-gray-200
                    px-4
                    py-2
                    ${!props.somenteLeitura ? 'focus:bg-gray-100': ''}
                    focus:outline-none
                `}
            />
        </div>
    )
}