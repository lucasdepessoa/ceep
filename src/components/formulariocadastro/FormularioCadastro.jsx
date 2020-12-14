import React, {Component} from 'react';
import "./style.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input className="form-titulo" type="text" placeholder="Titulo" />
        <textarea className="form-text" placeholder="Digite a sua nota..."></textarea>
        <button type="button" className="form-button">Adicionar nota</button>
      </form>
    );
  }
}


export default FormularioCadastro;