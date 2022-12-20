import React from 'react'
import {FiList} from 'react-icons/fi'
export const Activities = () => {
  return (
    <div>  <div><h6><span><FiList/></span>Actividades</h6>
    <div>
        <input  className='inputCard'type="text" required name="title"></input>
    <button type="submit" className='cancelar' >Guardar</button></div>
    
           </div></div>
  )
}
