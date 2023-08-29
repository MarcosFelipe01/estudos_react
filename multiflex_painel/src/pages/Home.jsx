import React from 'react'
import Cabecalho from '../layout/Cabecalho'

import './styles/Home.css'
import { Link } from 'react-router-dom'

export default props => {
    return(
        <div><Cabecalho />
            <div className='Home'>
                    <table>
                        <thead>
                            <th>Nome</th>
                        </thead>
                        <tbody>
                            <Link to="/"><td>Marcos</td></Link>
                            <td>Thiago</td>
                            <td>Lucas</td>
                            <td>Gabriel</td>
                            <td>Igor</td>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}