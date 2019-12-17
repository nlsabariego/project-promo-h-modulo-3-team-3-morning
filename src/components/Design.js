import React from "react";
import "../stylesheets/Design.scss";

function Design() {
  return (
    <div className="js-container">
      <div className="colour">
        <h2 className="colour__title">Colores</h2>

        <div className="colour__palettes js-colour-palettes">
          <div id="js-color-option1">
            <label className="option1" for="color-option1">
              <input className="option1_items" type="radio" value="1" id="color-option1" name="color-options" palette="palette1" checked />
              <div className="palette1">
                <div className="palette1__item1"></div>
                <div className="palette1__item2"></div>
                <div className="palette1__item3"></div>
              </div>
            </label>
          </div>
          <div id="js-color-option2">
            <label className="option2" for="color-option2">
              <input className="option2_items" type="radio" value="2" id="color-option2" name="color-options" palette="palette2" />
              <div className="palette2">
                <div className="palette2__item1"></div>
                <div className="palette2__item2"></div>
                <div className="palette2__item3"></div>
              </div>
            </label>
          </div>
          <div id="js-color-option3">
            <label className="option3" for="color-option3">
              <input className="option3_items" type="radio" value="3" id="color-option3" name="color-options" palette="palette3" />
              <div className="palette3">
                <div className="palette3__item1"></div>
                <div className="palette3__item2"></div>
                <div className="palette3__item3"></div>
              </div>
            </label>
          </div>
          <div id="js-color-option4">
            <label className="option4" for="color-option4">
              <input className="option4_items" type="radio" value="4" id="color-option4" name="color-options" palette="palette4" />
              <div className="palette4">
                <div className="palette4__item1"></div>
                <div className="palette4__item2"></div>
                <div className="palette4__item3"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Design;
