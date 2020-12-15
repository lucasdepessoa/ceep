import React, { Component, useState } from "react";
import FormularioCadastro from "./components/formulariocadastro/";
import ListaDeNotas from "./components/listadenotas/"
import './assets/App.css';
import './assets/index.css';

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      notes:[]
    }
  }

  NoteCreate(title, text){
    const newNote = {title,text}
    
    const newArrayNotes = [...this.state.notes,newNote]
    
    const newState = {
      notes: newArrayNotes
    }

    this.setState(newState)
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro CreateNota={this.NoteCreate.bind(this)}/>
        <ListaDeNotas
          notes={this.state.notes}
        />
      </section>
    );
  }
}

export default App;
