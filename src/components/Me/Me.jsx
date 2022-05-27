import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Me.css';

export default class Me extends Component {
  render() {
    return (
      <div className='me-content'>
        <section className='text-content'>
        <h1>
          MINHA TRAJETÓRIA
        </h1>
        <h2>
        Separei esse espaço para contar para você um pouco da minha história e de como eu cheguei até aqui.
        </h2>
        <p>
        Tudo começou quando eu tinha 14 anos, meu irmão estudava para concursos militares e me inspirando nele, aos 15 anos, decidi prestar concurso para a EPCAR (Escola Preparatória de Cadetes do Ar) e para a AFA (Academia da Força Aérea) durante quatro anos. Ao decorrer desses anos, me dediquei 100% a isso, mas no meu último ano do ensino médio, fui aprovada no curso de engenharia mecânica no IFRJ. Dois anos depois, comecei a me interessar pela área de tecnologia e pesquisando a fundo conheci a Trybe. Com isso, resolvi me inscrever no processo seletivo, composto por um desafio prático, uma entrevista e um teste da Mindsight, em que concorri com + 25 mil pessoas.
        </p> 
        <p>
        Atualmente, sou estudante de Desenvolvimento Web Full Stack na Trybe, onde diariamente passo por experiências desafiadoras que me levam a aprimorar tanto minhas Hard Skills, quanto as minhas Soft Skills. No momento, estou terminando o módulo de Front-End e em breve darei início ao módulo de Back-End. Além disso, dou aulas particulares de fundamentos de programação e também trabalho com desenvolvimento de sites.<span><Link to='/desenvolvimento-site'>Saiba mais</Link></span>
        </p>
        </section>
      </div>
    )
  }
}
