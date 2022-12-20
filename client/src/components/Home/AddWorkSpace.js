import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import formIMG from '../../img/formIMG.svg'
import { defaultEnableSubmit } from '../../helpers/disableButton'
import { defaultFetch } from '../../helpers/defaultFetch'
import { Navigate } from 'react-router-dom'
import wave from '../../img/wave.svg'

const AddWorkSpace = ({ setIsFormOpen }) => {

    // const [isInputDisabled, setIsInputDisabled] = useState('disabled')
    const [navigate, setNavigate] = useState(false)
    const [board, setBoard] = useState('')
    const [formValues, setFormValues] = useState({
        "name_": "",
        type: "",
        visibility: '',
        configuration: "{}",
        description: ""
    })

    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
    defaultEnableSubmit(isButtonEnabled, 'input[type="submit"]')

    useEffect(() => {
        if (formValues.name_ === '' || formValues.type === '' || formValues.type === 'Elegir...' || formValues.visibility === '' || formValues.visibility === 'Elegir...') {
            setIsButtonEnabled(false)
        } else {
            setIsButtonEnabled(true)
        }
    }, [formValues])

    // para poder actualizar los valores del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formValues)
        const ws = await defaultFetch('/insert-workspace', 'POST', formValues)
        if(ws){
            const goToBoard = await fetch(`/show-boardByWs/${ws.id}`)
                .then(res => res.json())
                .then(data => {
                    return(data)
                })
                setBoard(`/board/${goToBoard[0].id}`)
                setNavigate(true)
        }
    }

    return (
        <div className='modalLayer'>
            <div className='addWorkSpaceModal' >
                <div className='addWorkSpaceForm'>
                    <form onSubmit={handleSubmit}>
                        <h2>Vamos a crear un Espacio de trabajo</h2>
                        <h4>Impulse su productividad facilitándoles a todos el acceso a los tableros en una única ubicación.</h4>

                        <label htmlFor='workspaceName'>Nombre del Espacio de trabajo</label>

                        <input
                            type='text'
                            placeholder='your workspace'
                            name='name_'
                            value={formValues.name_}
                            onChange={handleChange}
                        />

                        <label htmlFor='type'>Tipo de Espacio de trabajo</label>
                        <select name='type' value={formValues.type} onChange={handleChange}>
                            <option default>Elegir...</option>
                            <option>Operaciones</option>
                            <option>Marketing</option>
                            <option>Educacion</option>
                            <option>Empresa Pequeña</option>
                            <option>Recursos Humanos</option>
                            <option>CRM de ventas</option>
                            <option>Ingeniería y IT</option>
                            <option>Otros</option>
                        </select>

                        <label htmlFor='visibility'>Visibilidad del Espacio de trabajo</label>
                        <select name='visibility' value={formValues.visibility} onChange={handleChange}>
                            <option default>Elegir...</option>
                            <option>Public</option>
                            <option>Private</option>
                        </select>

                        <label htmlFor='description'>Descripción del Espacio de trabajo <span>(Opcional)</span></label>
                        <textarea
                            name='description'
                            placeholder='Envía a los miembros de tu equipo unas cuantas palabras sobre el Espacio de trabajo.'
                            value={formValues.description}
                            onChange={handleChange}>
                        </textarea>
                        <input disabled type='submit' value='Continuar' />
                    </form>
                </div>
                
                <div className='addWorkSpaceDeco'>
                    {/* <img className='wave' src={wave}/> */}
                    <button className='closeWorkSpaceModal' onClick={() => setIsFormOpen(false)}><AiOutlineClose /></button>
                    <img src={formIMG} alt='icono' />
                </div>
            </div>
            {navigate && (
                <Navigate to={board} replace={true} />
            )}
        </div>
    )
}

export default AddWorkSpace
