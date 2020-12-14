import React, {Component} from 'react';

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Digite a sua nota..."></textarea>
        <button>Adicionar nota</button>
      </form>
    );
  }
}


export default FormularioCadastro;