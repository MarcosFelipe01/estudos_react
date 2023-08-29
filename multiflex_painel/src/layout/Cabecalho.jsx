import React from 'react';
import './Cabecalho.css'
import LogoFlex from '../images/logoFlex.png';

export default props =>{
    return(
        <div className='Cabecalho'>
                <nav className='NavBar'>
                    <a href='./cliente'><img src={LogoFlex}/> MultiFlex</a>
                </nav>
        </div>
    )
}