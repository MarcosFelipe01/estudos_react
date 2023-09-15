import './Intervalo.css'
import React from 'react';
import Card from './Card';
import { Connect, connect } from 'react-redux';
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/actions/numeros'

const Intervalo = props => {
    const { min, max } = props
    //props.minChange(50)
    //props.maxChange(1500)
    return (
        <Card title="Intervalo de numeros" purple>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo:</strong>
                    <input type='number' value={min}
                        onChange={e => props.minChange(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type='number' value={max}
                        onChange={e => props.maxChange(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        minChange(novoNumero) {
            //Action Creator => action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        maxChange(novoNumero) {
            //Action Creator => action
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)