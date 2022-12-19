import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import formIMG from '../../img/formIMG.svg'
import { defaultEnableSubmit } from '../../helpers/disableButton'

const AddWorkSpace = ({ setIsFormOpen }) => {

    // const [isInputDisabled, setIsInputDisabled] = useState('disabled')

    const [formValues, setFormValues] = useState({
        name: "",
        type: "",
        description: ""
    })

    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
    defaultEnableSubmit(isButtonEnabled, 'input[type="submit"]')

    useEffect(() => {
        if (formValues.name === '' || formValues.type === '' || formValues.type === 'Elegir...') {
            setIsButtonEnabled(false)
        }else if(formValues.name !== '' && formValues.type !== ''){
            setIsButtonEnabled(true)
        }
    }, [formValues])

    // para poder actualizar los valores del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                            name='name'
                            value={formValues.name}
                            onChange={handleChange}
                        />
                        <p>Este es el nombre de su empresa, equipo u organización.</p>

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

                        <label htmlFor='description'>Descripción del Espacio de trabajo <span>Opcional</span></label>
                        <textarea name='description' value={formValues.description} onChange={handleChange}></textarea>
                        <p>Incorpora a los miembros con unas cuantas palabras sobre tu Espacio de trabajo.</p>
                        <input disabled type='submit' value='Continuar' />
                    </form>
                </div>
                <div className='addWorkSpaceDeco'>
                    <button className='closeWorkSpaceModal' onClick={() => setIsFormOpen(false)}><AiOutlineClose /></button>
                    <img src={formIMG} alt='icono' />
                </div>
            </div>
        </div>
    )
}

export default AddWorkSpace
