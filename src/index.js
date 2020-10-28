import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

const root = document.getElementById("root")

//------ EJEMPLO "HOLA MUNDO" SIN JSX -------- //

//const elemento = React.createElement(componente, propiedades, hijos)
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola Mundo")
//ReactDOM.render(elemento, root);

//------ EJEMPLO "HOLA MUNDO" CON JSX -------- //

ReactDOM.render(< App />, root);