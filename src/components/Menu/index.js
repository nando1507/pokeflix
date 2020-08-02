import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="Pokeflix"/>            
        </a>

        <ButtonLink as ="a" className="ButtonLink" href="/">
            Novo Pokemon
        </ButtonLink>
        
        

        



        </nav>
    )
}

export default Menu;