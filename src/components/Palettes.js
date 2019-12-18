import React from "react";

function Palettes(props) {
    return (
        <div id={props.id}>
            <label
                className={props.className}
                htmlFor={props.idInput}>
                <input
                    className={props.classNameInput}
                    type="radio"
                    value={props.value}
                    id={props.idInput}
                    name="color-options"
                    palette={props.palette}
                    checked={props.checked}
                />
                <div className={props.palette}>
                    <div className={props.color1}></div>
                    <div className={props.color2}></div>
                    <div className={props.color3}></div>
                </div>
            </label>
        </div >


    );
}

export default Palettes;
