import React from 'react'

const AddWorkSpace = ({ setIsFormOpen }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        // <div className='modalLayer'>
            <div className='addWorkSpaceModal'>
                <div className='addWorkSpaceForm'>
                    <form onSubmit={handleSubmit}>
                        <h2>Vamos a crear un Espacio de trabajo</h2>
                        <h4>Impulse su productividad facilitándoles a todos el acceso a los tableros en una única ubicación.</h4>

                        <label>Nombre del Espacio de trabajo</label>
                        <input type='text' placeholder='your workspace' />
                        <p>Este es el nombre de su empresa, equipo u organización.</p>

                        <label>Tipo de Espacio de trabajo</label>
                        <select>
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

                        <label>Descripción del Espacio de trabajo <span>Opcional</span></label>
                        <textarea></textarea>
                        <p>Incorpora a los miembros con unas cuantas palabras sobre tu Espacio de trabajo.</p>
                        <button type='submit'>Continuar</button>
                    </form>
                </div>
                <div className='addWorkSpaceDeco'>
                    <button className='closeWorkSpaceModal' onClick={() => setIsFormOpen(false)}>X</button>
                </div>
            </div>
        // </div>
    )
}

export default AddWorkSpace
