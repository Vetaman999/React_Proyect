import logo from "./logo.svg";
import "./App.css";
import Componente from "./componets/Componente";
import Propiedades from "./componets/Propiedades";
import Estado from "./componets/Estado";
import RenderizadoCondicional from "./componets/RenderizadoCondicional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente msg="Hola soy un component" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre:"Hugo", correo:"hugo.quispe12359@gmail.com"}}
            funtion={(numero)=> numero*numero}
            elemReact={<i>Esto es una propiedad de React</i>}
            componenteReact={<Componente msg="Soy el componente"/>}
          />
          <hr/>
          <Estado/>          
          <hr/>
          <RenderizadoCondicional/>
        </section>
      </header>
    </div>
  );
}

export default App;
