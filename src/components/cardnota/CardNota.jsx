import React, { Component } from 'react';
import './style.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class CardNota extends Component {

  deleteNote(){
    const indice = this.props.indice
    this.props.noteDelete(indice)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota-titulo">{this.props.title}</h3>
          <DeleteSVG onClick={this.deleteNote.bind(this)}/>
        </header>
        <p  className="card-nota-texto">{this.props.text}</p>
      </section>
    );
  }
}


export default CardNota;