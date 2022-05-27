import React, { Component } from 'react';
import './Contact.css';
import logotipo from '../images/logotipo-grande.png';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';
import linkedin from '../images/likedin.png';
import { send } from '@emailjs/browser';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      fone: '',
      email: '',
      comment: '',
      sucess: false,
      loading: false,
    }
  }

  inputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  sendEmail = () => {
    this.setState({ name: '', fone: '', email: '', comment: '', sucess: true })
  }

  sendMail = (event) => {
    const { name, email, fone, comment } = this.state;
    event.preventDefault();
    this.setState({ loading: true }, () => {
      send(
        'service_lcniljl',
        'template_xy8ajpw',
        { name, email, fone, comment },
        'cL9yXflnAWCL-ozhV',
      )
        .then((response) => {
          console.log('mensagem enviada com sucesso', response.status, response.text);
          this.setState({ loading: false, sucess: true }, this.sendEmail())
        })
        .catch((err) => {
          console.log('falha no envio', err)
        })
    })
  }


  render() {
    const { name, email, fone, comment, sucess, loading } = this.state;
    return (
      <div className='contact-container'>
        <section className='contact'>
          <h1>
            CONTATO
          </h1>
          <form onSubmit={this.sendMail}>
            <input type='text' name='name' onChange={this.inputChange} className='input-contact' value={name} placeholder='Nome'
              required />
            <input type='number' name='fone' onChange={this.inputChange} className='input-contact' value={fone} placeholder='Celular' />
            <input type='email' name='email' onChange={this.inputChange} className='input-contact' value={email} placeholder='Email'
              required />
            <textarea type='text' name='comment' onChange={this.inputChange} className='input-contact input-contact-area' value={comment} placeholder='Mensagem' />
            {loading ? <button type='submit' className='btn-submit'>
              Enviando...
            </button>
              :
              <button type='submit' className='btn-submit'>
                Enviar
              </button>
            }
            {sucess && <h5 className='message' >MENSAGEM ENVIADA COM SUCESSO</h5>}
          </form>
        </section>
        <section className='contact-data'>
          <div className='logo'>
            <img src={logotipo} alt="logotipo" />
            <h2>RWD</h2>
          </div>
          <div className='data-me'>
            <div className='user-me'>
              <FaUserAlt className='icon-user' />
              <h3>Hellen Ribas</h3>
            </div>
            <div className='email-me'>
              <AiOutlineMail className='icon-user' />
              <p>contatorwd22@gmail.com</p>
            </div>
            <div className='number-me'>
              <p>
                <BsWhatsapp className='icon-user' />
                <span className='cinquenta'>+55</span><span>(21)</span><span>9</span>9130<span>-</span>5669</p>
            </div>
          </div>
          <div className='social-media'>
            <a href='https://github.com/hellenribas' target='_blank' rel="noreferrer"><BsGithub className='logo-social' /></a>
            <a href='https://www.linkedin.com/in/hellenribas/' target='_blank' rel="noreferrer"><img src={linkedin} alt="logo-linkedin" className='logo-social linkedin' /></a>
          </div>
        </section>
      </div>
    )
  }
}
