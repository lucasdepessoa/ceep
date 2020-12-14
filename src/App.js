import { Component } from "react";
import FormularioCadastro from "./components/formulariocadastro/FormularioCadastro";
import ListaDeNotas from "./components/listadenotas/ListaDeNotas"


class App extends Component{
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
