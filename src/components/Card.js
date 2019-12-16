<section className="result">
  <div className="result__container">
    {" "}
    <a className="button--delete js-button--delete">
      <i className="far fa-trash-alt trash__icon"></i>Reset
    </a>
    <div className="card js-card">
      <div className="card__border-left card__border-left">
        <h1 className="card__title js-cardTitle">Nombre Apellido</h1>
        <h2 className="card__job js-cardJob">Front-end developer</h2>
      </div>

      <div className="card__image js__profile-image"></div>
      <ul className="card__list">
        <li className="card__item js-card__item  opacity itemPhone">
          <a className="card__link js-cardPhone" href="" title="Número teléfono" target="_blank">
            <i className="fas fa-mobile-alt card__icon"></i>
          </a>
        </li>
        <li className="card__item js-card__item opacity itemEmail">
          {" "}
          <a className="card__link js-cardEmail" href="" title="Mandar un correo" target="_blank">
            <i className="far fa-envelope card__icon"></i>
          </a>
        </li>
        <li className="card__item js-card__item opacity itemLinkedin">
          {" "}
          <a className="card__link js-cardLinkedin" href="" title="Visitar LinkedIn" target="_blank">
            <i className="fab fa-linkedin-in card__icon"></i>
          </a>
        </li>
        <li className="card__item js-card__item opacity itemGithub">
          {" "}
          <a className="card__link js-cardGithub" href="" title="Ir a GitHub" target="_blank">
            <i className="fab fa-github-alt card__icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>;
