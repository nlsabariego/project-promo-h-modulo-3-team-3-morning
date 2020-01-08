import React from 'react';
import '../stylesheets/Card.scss';

function Icons(props) {
  return (
    <ul className='card__list'>
      <li className={`card__item ${props.phone === '' ? 'opacity' : ''}`}>
        <a className='card__link' href={`tel:${props.phone}`} title='Número teléfono' target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-mobile-alt card__icon'></i>
        </a>
      </li>
      <li className={`card__item ${props.email === '' ? 'opacity' : ''}`}>
        <a className='card__link js-cardEmail' href={`mailto:${props.email}`} title='Mandar un correo' target='_blank' rel='noopener noreferrer'>
          <i className='far fa-envelope card__icon'></i>
        </a>
      </li>
      <li className={`card__item ${props.linkedin === '' ? 'opacity' : ''}`}>
        <a className='card__link js-cardLinkedin' href={`https://www.linkedin.com/in/${props.linkedin}`} title='Visitar LinkedIn' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin-in card__icon'></i>
        </a>
      </li>
      <li className={`card__item ${props.github === '' ? 'opacity' : ''}`}>
        <a className='card__link js-cardGithub' href={`https://github.com/${props.github}`} title='Ir a GitHub' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github-alt card__icon'></i>
        </a>
      </li>
    </ul>
  );
}

export default Icons;
