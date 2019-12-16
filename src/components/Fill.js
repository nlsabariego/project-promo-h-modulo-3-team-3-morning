<div className="js-container">
  <label for="fullName" className="form__label">
    Nombre completo
  </label>
  <input type="text" id="name" name="name" placeholder="Ej:sally-hill@gmail.com" className="form__input js-name" required />
  <label for="job" className="form__label">
    Puesto
  </label>
  <input type="text" id="job" name="job" placeholder="Ej: Front-end unicorn" className="form__input js-job" required />
  <label for="image" className="form__label">
    Imagen de perfil
  </label>
  <div className="form__image">
    <input type="file" className="form__file js__profile-upload-btn" name="file" id="img-selector"></input>
    <button for="file" className="form__image--btn js__profile-trigger">
      Añadir imagen
    </button>
    <img className="form__image--min js__profile-preview-img" />
  </div>
  <label for="email" className="form__label">
    Email
  </label>
  <input type="email" id="email" name="email" placeholder="Ej: sally-hill@gmail.com" className="form__input js-email" required />
  <label for="phone" className="form__label">
    Teléfono
  </label>
  <input type="tel" id="phone" name="phone" placeholder="Ej:555-55-55-55" className="form__input js-phone" />
  <label for="linkedin" className="form__label">
    Linkedin
  </label>
  <input type="text" id="linkedin" name="linkedin" placeholder="Ej: linkedin.com/in/sally.hill" className="form__input js-linkedin" required />
  <label for="github" className="form__label">
    Github
  </label>
  <input type="text" id="github" name="github" placeholder="Ej: @sally-hill" className="form__input js-github" required />
</div>;
