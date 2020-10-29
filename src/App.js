import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso';

const App = () => (
    <>
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" src="http://localhost:3000/s3.jpg" alt="banner" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Mi banner en React</p>
                        <p> Subtítulo del banner</p>
                        <a href="http://localhost:3000/" className="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="ed-grid m-grid-3">
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
        </div>
    </>
)

export default App;
