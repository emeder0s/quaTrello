import React from 'react'
import imagenPerfil from '../../img/imagenPerfil.png'

export const Perfil = () => {


    const infPersonal = "Esta es una cuenta de Atlassian. Edite su información personal y los ajustes de visibilidad en su Perfil de Atlassian.Para obtener más información, consulte nuestras Condiciones del Servicio o nuestra Política de Privacidad"

    const updateInfo = e => {

        e.preventDefault();

        let info = {
            userName: e.target.userName.value,
            userBio: e.target.bio.value
        }


        let Metadatos = {
            method: 'PUT',
            body: JSON.stringify(info),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("/", Metadatos)
            .then((res) => console.log(res))
    }


    return (

        <div className='info'>

            <img src={imagenPerfil} alt="" />

            <h1 className='h1Info'>Gestione su información personal</h1>

            <p className="personal">{infPersonal}</p>

            <p className='pAce'>Acerca de:</p>

            <hr className='hr'/>

            <form onSubmit={updateInfo} className='formInfo'>

                <p className='pName'>Nombre de usuario</p>
        
                <input type="text" name='userName' className='userName' />
                <p className='pBio'>Biografía</p>

                <textarea cols="50" rows="10" className='bio' name='bio'></textarea>
                <br />

                <input type="submit" className="btnInfo" guardar />

            </form>


        </div>
    )
}
