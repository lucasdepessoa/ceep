import React, {Component} from 'react';
import "./style.css";

class FormularioCadastro extends Component {

  constructor(props){
    super()
    this.title = ''  
    this.text = ''
  }

  _handleTitleChange(event){
    event.stopPropagation()
    this.title = event.target.value
  }

  _handleTextChange(event){
    event.stopPropagation()
    this.text = event.target.value
  }

  _cardCreate(event){
    event.preventDefault()
    event.stopPropagation()

    //Acessando a propriedade do formulário para que ela acesse um método paralelo//
    this.props.CreateNota(this.title,this.text)
  }

  render() {
    return (
      <form 
        className="form-cadastro"
        onSubmit={this._cardCreate.bind(this)}
      >
        <input 
          className="form-cadastro-input" 
          type="text" 
          placeholder="title"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea 
          rows={15}
          className="form-cadastro-input" 
          placeholder="Digite a sua nota..."
          onChange={this._handleTextChange.bind(this)}
        ></textarea>
        <button 
          className="form-cadastro-input form-cadastro-submit"
        >Adicionar nota</button>
      </form>
    );
  }
}


export default FormularioCadastro;