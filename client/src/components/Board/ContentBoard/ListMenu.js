
import React, { useContext } from 'react'
import { BoardContext } from '../../../providers/boardProvider';
import { defaultFetch } from '../../../helpers/defaultFetch';
export const ListMenu = ({menuShow, setMenuShow}) => {
    const { setRefresh } = useContext(BoardContext)
    const add = () => {
        setMenuShow(!menuShow)}
        
    const deleteList = () => {
        let listId = localStorage.getItem("CurrentList")
        console.log(listId)
       defaultFetch("http://localhost:5000/delete-list", "DELETE", {id: listId}).then((res) => { console.log(res) });
        setMenuShow(!menuShow);
        setRefresh(listId)
    }
  return (
    <div> 
        <div className='carEditMenu2 menuBorrar'>
            <div className='listTitle '>
                <h6></h6>
                <button className='close' onClick={add}>&#x2715;</button>
            </div>
            <button onClick={deleteList}className='borrar'>Archivar Lista</button>
            </div>
            </div>
  )
}
