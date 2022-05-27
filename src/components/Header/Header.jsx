import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logotipo from '../images/logotipo.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
      <Link to='/'>
        <section className='logo-marca'>
          <img src={logotipo} alt='logo-tipo' />
          <h3 className='rwd-text'>RWD</h3>
        </section>
      </Link>
      <nav className='nav'>
        <ul className='links-nav'>
          <Link to='/projetos' className='link-li'>
            <li>PROJETOS</li>
          </Link>
          <Link to='/aula-particular' className='link-li'>
            <li>AULA PARTICULAR</li>
          </Link>
          <Link to='/desenvolvimento-site' className='link-li'>
            <li>DESENVOLVIMENTO DE SITE</li>
          </Link>
          <Link to='/contato' className='link-li'>
            <li>CONTATO</li>
          </Link>
        </ul>
      </nav>
      <section className='text-web-developer'>
        <p>WEB DEVELOPER</p>
      </section>
      </header>

      
    )
  }
}
