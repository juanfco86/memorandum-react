import React from 'react'

const InputFilter = ({ yearFilter }) => {
    return (
        <form onSubmit={ yearFilter }>
            <label htmlFor="numberFilter" >Filter by Year: </label>
            <input type='number' placeholder='2010' name='numberFilter' />
            <button className='inputFilter--button' type='submit' value='Submit'>Submit</button>
        </form>
    )
}

export default InputFilter