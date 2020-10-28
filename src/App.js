import React, {Fragment} from 'react';
import "./styles/styles.scss";

const App = () => (
    <Fragment>
        <div>
            <h1>Hola Mundo</h1>
            <p>Hola saludando desde mi componente</p>
        </div>
        <div>
            <h2>Hola mundo soy un H2</h2>
            <p>Probando compilacion de dos elementos</p>
            <img src="./logo.svg" />
        </div>
    </Fragment>
)

export default App;
