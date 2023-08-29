import React, { useState } from 'react';
import './styles/Login.css'
import Usuarios from '../dados/Usuarios.js'

import { Link } from 'react-router-dom'
import Cabecalho from '../layout/Cabecalho';

function Autenticar(login, pass){
    for (var i = 0; i < Usuarios.length; i++){
        if(Usuarios[i].user === login && Usuarios[i].senha === pass){
            return true
            break;
        }else{
            return false    
        }
    }
}

function Teste(a, b){
    if(Autenticar(a, b)){
        return console.log('Verdadeiro')
    }else{
        return console.log('False')
    }
}

export default props => {
    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')

    

    return(
        <><Cabecalho />
        <div className='Login' style={{justifyContent: 'top'}}>
            <form>
                <h1>MultiFlex</h1>
                <h2>Efetue o Login</h2>
                <label>
                    <input type='text' placeholder='Login' value={user} onChange={e => setUser(e.target.value)} /><br />
                </label>
                <label>
                    <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} /><br />
                </label>
                <button onClick={Teste(user, senha)}>Logar</button>
            </form>
            </div>
        </>
    )
}