import React from 'react';
import '../stylesheets/Card.scss';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function Icons(props) {
  return (
    <ul className='card__list'>
      <li className={`card__item ${props.phone === '' ? 'opacity' : ''}`}>
        <a className='card__link' href={`tel:${props.phone}`} title='Número teléfono' target='_blank' rel='noopener noreferrer'>
          <i className='card__icon'><FontAwesomeIcon icon={faMobileAlt}
          /></i>
        </a>
      </li>
      <li className={`card__item ${props.email === '' ? 'opacity' : ''}`}>
        <a className='card__link js-cardEmail' href={`mailto:${props.email}`} title='Mandar un correo' target='_blank' rel='noopener noreferrer'>
          <i className='card__icon'><FontAwesomeIcon icon={faEnvelope}
          /></i>
        </a>
      </li>
      <li className={`card__item ${props.linkedin === '' ? 'opacity' : ''}`}>
        <a className='card__link js-cardLinkedin' href={`https://www.linkedin.com/in/${props.linkedin}`} title='Visitar LinkedIn' target='_blank' rel='noopener noreferrer'>
          <i className='card__icon'><FontAwesomeIcon icon={faLinkedinIn}
          /></i>
        </a>
      </li>
      <li className={`card__item ${props.github === '' ? 'opacity' : ''}`}>
        <a className='card__link js-cardGithub' href={`https://github.com/${props.github}`} title='Ir a GitHub' target='_blank' rel='noopener noreferrer'>
          <i className='card__icon'><FontAwesomeIcon icon={faGithubAlt}
          /></i>
        </a>
      </li>
    </ul>
  );
}

Icons.propTypes = {
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};
export default Icons;
