import React, { useEffect, useState } from 'react'
import './css/form.css'
import Dropdown from './dropdown.jsx'
import Input from './input.jsx'
import Checkbox from './checkbox.jsx'

const Form = ({ opts, sendQuery }) => {

    const [tabs, setTabs] = useState(["Селекторы", "Таблицы", "Каталоги"])
    const [params, setParams] = useState({});
    // const [selector, setSelector] = useState("");

    const onFormChange = (changes) => {
        console.log(changes);
        
        // changes.selector = (params.selector && changes.customSelector) ? changes.customSelector : changes
        
        setParams({ ...params, ...changes });
        
    }

    const submit = () => {

        sendQuery(params);
    }

    return (
        <form name="index_submit_domain" onSubmit={(e) => e.preventDefault()} >
            <div className='url-box'>
                <Input value={params.url} onChange={onFormChange} />
            </div>
            <div className='options-box selector-box'>
                <Dropdown opts={opts} value={params.selector} onChange={(v) => onFormChange({ selector: v })} />
            </div>
            <div className='options-box custom-selector'>
                <input type='text' value={params.selector} onChange={(e) => onFormChange({ selector: e.target.value })} />
            </div>
            <Checkbox active={params.url && params.selector} onChange={(v) => onFormChange({ html: v })} />
            <button disabled={!params.url || !params.selector} onClick={submit} >Lets GO</button>
        </form>

    )
}

export default Form