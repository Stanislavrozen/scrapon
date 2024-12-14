import React, { useRef, useState } from 'react';
import validator from 'validator';
import './css/input.css';

const Input = ({ url, placeholder, onChange}) => {

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
            <input type="text" placeholder={placeholder} name="page" value={url}
                onChange={(e) => { valid(e) }} onBlur={(e) => valid(e)} />
    )
}

export default Input