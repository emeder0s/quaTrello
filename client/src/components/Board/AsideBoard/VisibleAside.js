import React, { useState } from 'react'
import { FaLessThan, FaAngleDown } from 'react-icons/fa'
import { AiOutlineUser, AiFillHdd, AiOutlinePlus } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import ModalSelectConfig from './ModalSelectConfig';
import ModalAddMember from './ModalAddMember/ModalAddMember';
// import { getFetch } from '../../../helpers/defaultFetch'

const VisibleAside = ({ setisAsideVisible }) => {

    const [isModalConfigOpen, setIsModalConfigOpen] = useState(false)
    const [isModalAddMemberOpen, setIsModalAddMemberOpen] = useState(false)

    // getFetch(workSpaceName)

    return (
        <div className='visibleAside'>
            <div className='asideHeader'>
                <h2>Nombre del WorkSpace</h2>
                <button onClick={e => setisAsideVisible(false)}><FaLessThan /></button>
            </div>

            <div className='asideOptions'>
                <ul>
                    <li>
                        <span className='asideIcon'><AiFillHdd /></span>
                        <span>Tableros</span>
                    </li>

                    <li>
                        <div>
                            <span className='asideIcon'><AiOutlineUser />
                            </span><span>Miembros</span>
                        </div>
                        <button onClick={e => setIsModalAddMemberOpen(!isModalAddMemberOpen)}><AiOutlinePlus /></button>
                    </li>

                    <li onClick={e => setIsModalConfigOpen(!isModalConfigOpen)}>
                        <div>
                            <span className='asideIcon'><BsFillLightningChargeFill /></span>
                            <span>Configuracion</span>
                        </div>
                        <FaAngleDown />
                    </li>
                </ul>
            </div>

            {/* Abrir modales de seleccion de config y para añadir miembros */}
            {isModalConfigOpen && <ModalSelectConfig />}
            {isModalAddMemberOpen && <ModalAddMember setIsModalAddMemberOpen={setIsModalAddMemberOpen}/>}
        </div>
    )
}

export default VisibleAside
