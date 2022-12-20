import React, { useContext, useEffect, useState } from 'react'
import { FiList } from 'react-icons/fi'
import { BoardContext } from '../../../providers/boardProvider';
import { defaultFetch } from '../../../helpers/defaultFetch';
export const Activities = () => {
  const { setRefresh } = useContext(BoardContext)
  const [cardData3, setCardData3] = useState();
  const [reloadPod, setReloadPod] = useState();

  let currentCardExtra = JSON.parse(localStorage.getItem('currentCard'));

  useEffect(() => {
    //Info de la tarjeta 
    console.log(currentCardExtra)
    defaultFetch(`http://localhost:5000/getactivities`, "POST", { fk_id_card: currentCardExtra })
      .then((res) => {
        console.log(res);
        setCardData3(res);
      })

  }, [reloadPod])
  const addActivity = e => {
    e.preventDefault();
    console.log(currentCardExtra)
    console.log(e.target.activity.value)
    let datos = { text_: e.target.activity.value, fk_id_card: currentCardExtra };
    console.log(datos)
    defaultFetch("/insertactivities", "POST", datos)
    setRefresh(e.target.activity.value)
    setReloadPod(e.target.activity.value)
  }
  return (
    <div className='activities'>  <div><h6><span><FiList /></span>Actividad</h6>
      <div>
        <form onSubmit={addActivity}>
         
          <input className='inputCard' type="text" required name="activity"></input>
          <button type="submit" className='cancelar' >Guardar</button> </form></div>
          <br/>
          <h4>Actividad de la tarjeta</h4>
          {cardData3 ?
          cardData3.map(activity =>{ 
            return (
              <div><p>{activity.date_} User: {activity.fk_id_user}</p>
              <h6>{activity.text_}</h6></div>
            )
            
          })
        :console.log("No tiene nada")
          }

    </div></div>
  )
}
