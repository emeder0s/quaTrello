import React, {useState} from 'react'
//import firstworkspaceFormIMG from '../../img/firstworkspaceFormIMG.svg'

const FirstWorkSpace = ({setDisplay}) => {

    const [formValues, setFormValues] = useState({
        name: "",
        team: ""
    })

    // para poder actualizar los valores del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...formValues })
        setDisplay('premium')
        console.log("Entra")
    }

    return (
        <div>
            {/*<img src={firstworkspaceFormIMG} alt="icono" />*/}
            <h1>¡Bienvenido a Trello!</h1>
            <h2>Creemos su Espacio de Trabajo</h2>
            <p>Un espacio para colaborar en proyecto independientemente de la ubicacion de sus compañeros de equipo</p>
            <div  className='registro'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Pongale nombre a su Espacio de trabajo (proyecto o nombre de equipo)</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Espacio de trabajo de Trello'
                    value={formValues.name}
                    onChange={handleChange}
                />

                <label htmlFor='team'>Pongale nombre a su Espacio de trabajo (proyecto o nombre de equipo)</label>
                <input
                    name='team'
                    placeholder='Introduzca tantas direcciones de correoo electronico como quiera...'
                    value={formValues.team}
                    onChange={handleChange}
                />

                <input type='submit' value='Cree su espacio de trabajo' />
            </form>
            </div>
        </div>
    )
}

export default FirstWorkSpace