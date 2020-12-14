import React, {Component} from 'react';
import "./style.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input className="form-cadastro-input" type="text" placeholder="Titulo" />
        <textarea className="form-cadastro-input" placeholder="Digite a sua nota..."></textarea>
        <button className="form-cadastro-input form-cadastro-submit">Adicionar nota</button>
      </form>
    );
  }
}


export default FormularioCadastro;