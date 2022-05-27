import React, { Component } from 'react';
import ImageLayout from '../images/layout.png';
import TodoList from '../images/todo-list-of.png';
import PixelArt from '../images/pixels-art-of.png';
import './Project.css';
import ColorGuess from '../images/color-guess-of.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Trybewallet from '../images/trybewallet.png';

export default class Project extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }

  searchInput = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleLeftClick = (event) => {
    event.preventDefault();
    const element = document.getElementById('carousel');
    element.scrollLeft -= element.offsetWidth
  }

  handleRightClick = (event) => {
    event.preventDefault();
    const element = document.getElementById('carousel');
    element.scrollLeft += element.offsetWidth
  }

  mouseImg = ({ target }) => {
    const img = document.getElementById(target.id);
    img.src = target.name;
  }

  leaveImg = ({ target }) => {
    const img = document.getElementById(target.id);
    img.src = target.name;
  }

  

  render() {

    return (
      <div className='project-tech'>
        <div className='info-title'>
          <h1>PROJETOS</h1>
        </div>
        <main className='project-search'>
          <div className='carousel' id='carousel'>
          <div className='img-carousel'>
              <a href='https://github.com/hellenribas/trybeWallet' target='_blank' rel="noreferrer">
              <img src={Trybewallet} alt='project4' />
              <p>TRYBEWALLET</p>
              </a>
            </div>
            <div className='img-carousel'>
            <a href='https://github.com/hellenribas/todo-list' rel="noreferrer" target='_blank'>
              <img src={TodoList} alt='project3'
              id='todo-list'
                />
              <p>TODOLIST</p>
              </a>
            </div>
            <div className='img-carousel'>
            <a href='https://github.com/hellenribas/color-guess' target='_blank' rel="noreferrer">
              <img src={ColorGuess}
                alt='project2'  />
              <p>COLORGUESS</p>
              </a>
            </div>
            <div className='img-carousel'>
            <a href='https://github.com/hellenribas/pixels-art' target='_blank' rel="noreferrer">
              <img id='imgpixel' src={PixelArt} alt='project1' name='PixelArt' />
              <p>PIXELSART</p>
              </a>
            </div>
            <div className='img-carousel'>
              <img src={ImageLayout}
                alt='project5' className='wall-5' />
              <p>Img5</p>
            </div>
            <div className='img-carousel'>
              <img src={ImageLayout} alt='project6' className='wall-6' />
              <p>Img6</p>
            </div>
            <div className='img-carousel'>
              <img src={ImageLayout} alt='project6' className='wall-6' />
              <p>Img7</p>
            </div>
            <div className='img-carousel'>
              <img src={ImageLayout} alt='project6' className='wall-6' />
              <p>Img8</p>
            </div>
            <div className='img-carousel'>
              <img src={ImageLayout} alt='project6' className='wall-6' />
              <p>Img9</p>
            </div>
            <div className='img-carousel'>
              <img src={ImageLayout} alt='project6' className='wall-6' />
              <p>Img10</p>
            </div>
          </div>
          <div className='button-container'>
            <button onClick={ this.handleLeftClick }>
            <IoIosArrowDroprightCircle className='left' />
            </button>
            <button onClick={ this.handleRightClick }>
              <IoIosArrowDroprightCircle className='right' />
            </button>
          </div>
        </main>
      </div>
    )
  }
}
