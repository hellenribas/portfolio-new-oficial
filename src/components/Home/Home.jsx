import React, { Component } from 'react'
import './Home.css';
import { Link, Redirect } from 'react-router-dom';
import me from '../images/image-me.png';
import border from '../images/border.png'; 
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default class Home extends Component {
    constructor() {
      super();
      this.state = {
        aboutRedirect: false,
      }
    }

    buttonAbout = () => {
      this.setState({aboutRedirect: true});
    }

  render() {
    const { aboutRedirect } = this.state;

    return (
      <main className='main-content'>
        <section className='meet'>
        <div className='text-apres'>
          <h2 className='hello'>OLÁ, MEU NOME É<span className='name-logo'>
            Hellen Ribas
            </span></h2>
          <h2 className='iam-web'>SOU<span className='web-text'>WEB DEVELOPER</span></h2>
          <p className='about-me-text'>Eu sou estudante de desenvolvimento web full stack na Trybe, estou finalizando o módulo de Front-End e em breve darei início...</p>
        </div>
        <button type='button' className='about-me' onClick={ this.buttonAbout }>
          Mais sobre mim
        </button>
        </section>
        <section className='me-info'>
          <div className='img-me'>
          <img src={me} alt="hellen-ribas" className='me'/>
          </div>
        <section className='project'>
          <img src={border} alt="border" />
          {/* <p>Venha conhecer meus projetos</p> */}
          <Link to='/projetos'>
            <HiOutlineArrowNarrowRight className='arrow' />
          </Link>
        </section>
        </section>
        {aboutRedirect && <Redirect to='/me' />}
      </main>
    )
  }
}
