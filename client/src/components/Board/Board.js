import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AsideBoard from './AsideBoard/AsideBoard'
import { CreateBoard } from '../Home/Boards/CreateBoard'
import { LinkNavBoard } from './MenuBoard/LinkNavBoard'
import { AddList } from './ContentBoard/AddList'
import { List } from './ContentBoard/List'
import { BoardContext } from '../../providers/boardProvider'
import { defaultFetch } from '../../helpers/defaultFetch'
import "../../css/layouts/chat_board.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Chat} from "./Chat/Chat"

const Board = () => {
  const { board } = useParams();
  const [currentBoard, setCurrentBoard] = useState([]);
  const [userLists, setUserLists] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState([]);
  const [newList, setNewList] = useState("");
  const [currentListId, setCurrentListId] = useState("");
  const [refresh, setRefresh] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    //Info del tablero - para colores, etc.
    fetch(`http://localhost:5000/show-board/${board}`).then((res) => res.json())
      .then((res) => {
        setCurrentBoard(res);
        console.log("board", res);
      })

    //Listas y sus tarjetas
    fetch(`http://localhost:5000/lists/${board}`).then((res) => res.json())
      .then((res) => {
        setUserLists(res);
      })
  }, [refresh])

  useEffect(() => {

    if (newList) {
      defaultFetch("http://localhost:5000/insert-list", "POST", newList).then((res) => { console.log(res) });
      //Listas y sus tarjetas
      fetch(`http://localhost:5000/lists/${board}`).then((res) => res.json())
        .then((res) => {
          setUserLists(res);
        })
    }
  }, [newList])

  useEffect(() => {
    if (newCardTitle) {
      defaultFetch("http://localhost:5000/insert-card", "POST", newCardTitle).then((res) => { console.log(res) });
      //Listas y sus tarjetas
      fetch(`/lists/${board}`).then((res) => res.json())
        .then((res) => {
          setUserLists(res);
        })
    }

  }, [newCardTitle])

  return (
    <div className='board'>
      <AsideBoard />
      <div className='list-container'>
        <LinkNavBoard />
        <br />
        <BoardContext.Provider value={{
          newCardTitle, setNewCardTitle,
          newList, setNewList,
          userLists, currentListId, setCurrentListId,
          setRefresh
        }}>
          <div className='lists-container'>
            {userLists.map((list, index) => (
              <List title={list.name_} key={list.name_} cards={list.cards} listId={list.id} />
            ))}
            <AddList />
          </div>
        </BoardContext.Provider>
        <button className='btn_chat' onClick={handleShow}>Chat</button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Chat {currentBoard.name_}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body id="cuerpochat">
            <Chat idBoard={board}/>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

export default Board

