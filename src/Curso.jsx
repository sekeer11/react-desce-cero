import React from 'react'

const curso = {
    "title":"React desde cero",
    "imagen":"http://localhost:3000/1.jpg",
    "price":"20USD"
}

const Curso = () => (
    <article className="card">
        
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={curso.imagen} alt="curso" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center"> 
                { curso.title }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="http://localhost:3000/profesor.jpg" alt="profesor" />
                        </div>
                    </div>
                    <span className="small">Alexys Lozada</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="http://localhost:3000/">{ `$ ${curso.price}` }</a>
            </div>
        </div>
    </article>
)

export default Curso; 