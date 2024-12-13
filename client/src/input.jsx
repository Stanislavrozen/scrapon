import React, { useRef, useState } from 'react';
import validator from 'validator';
import './css/input.css';

const Input = ({ url, onChange}) => {

    const valid = (e) => {

        var valid = validator.isURL(e.target.value);
        var val = validator.is

        if (e.type == "blur") {
            e.target.setAttribute("class", valid ? "" : "not-valid")
        }
        else {
            e.target.setAttribute("class", valid ? "valid" : "not-valid")
        }

        onChange({ url: valid ? e.target.value : null });
    }

    return (
        <div className='input-block'>
            <input type="text" placeholder="Адрес страницы" name="page" value={url}
                onChange={(e) => { valid(e) }} onBlur={(e) => valid(e)} />
        </div>
    )
}

export default Input