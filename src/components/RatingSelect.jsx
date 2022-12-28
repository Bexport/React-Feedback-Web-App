import React from 'react'

function RatingSelect({select,selected}) {
    //this function is used to update the new button state that was pressed[]
    const handleChange = (e)=>{
        select(+e.currentTarget.value)
    } 
    
    return (
        <ul className='rating'>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChange}
                checked={selected === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
      )
}

export default RatingSelect