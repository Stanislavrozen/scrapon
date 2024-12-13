import React from 'react'

const Checkbox = ({ onChange, active }) => {

    var classes = ["html-check-box"]

    if (active) classes.push("active");

    return (
        <div className={classes.join(' ')}>
            <input type="checkbox" name="getHtml" onChange={(e) => {

                onChange(e.target.checked)
            }} />
        </div>
    )
}

export default Checkbox