import React, { Component } from 'react';
import './style.css'


class CardNota extends Component {
  render() {
    return (
      <section 
        className="card-nota"
      >
        <header 
          className="card-nota-cabecalho"
        >
          <h3 
            className="card-nota-titulo"
          >{this.props.title}</h3>
        </header>
        <p 
          className="card-nota-texto"
        >{this.props.text}</p>
      </section>
    );
  }
}


export default CardNota;