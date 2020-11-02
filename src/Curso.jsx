import React from "react"
import PropTypes from "prop-types"

const Curso = ({imagen, title, profesor, price}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={imagen} alt="curso" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="http://localhost:3000/profesor.jpg" alt="profesor" />
            </div>
          </div>
          <span className="small">{profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a
          className="button--ghost-alert button--tiny"
          href="http://localhost:3000/"
        >{`$ ${price}`}</a>
      </div>
    </div>
  </article>
)


Curso.propTypes = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontro titulo",
    imagen : "",
    price: "--",
    profesor: ""
}

export default Curso;
