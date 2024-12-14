import React from 'react'
import './css/view.css'

const View = ({ scrap }) => {

  return (
    <div>{scrap.map((item, idx) => {

      return (
        <div className='result-box'>
          <div className='return-idx'>{idx} -------- </div>
          <div className='return-item'>{item}</div>
        </div>
      )
    })}</div>
  )
}

export default View