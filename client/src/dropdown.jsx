import React, { useEffect, useRef } from 'react';
import './css/dropdown.css';

const Dropdown = ({ opts, active, value, onChange }) => {

    let defaultValue = "default";

    if (value) {
        for (let i = 0; i < opts.length; i++) {

            console.log(opts[i]);

            if (value == opts[i].selector) {
                
                active = true;
            }
        }
    }
    else
    {
        active = true;
        value = "default";
    }
    
    value = (!active) ? "default" : value;
    
    return (
        <div className="select-box">
            <select disabled={!active} defaultValue="default" value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="default" disabled hidden>Введите селектор в поле ниже или выберите из этого списка</option>
                {opts.map((o) => {
                    return <option key={o.selector} value={o.selector}>{o.name}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown