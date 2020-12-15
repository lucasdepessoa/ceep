import React, { Component } from 'react';
import CardNota from "../cardnota";
import './style.css'

class ListaDeNotas extends Component {
  
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map( (notes,index) => {
          return (
            <li className="lista-notas-item" key={index}>
              <CardNota title={notes.title} text={notes.text} />
            </li>    
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;