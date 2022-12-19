import imagenPerfil from '../../img/imagenPerfil.png'
import { NavPerfil } from './NavPerfil'
import { useParams } from 'react-router-dom'

import { defaultFetch } from '../../helpers/defaultFetch';

export const Perfil = () => {
    var userPerfil = JSON.parse(localStorage.getItem("user"))

    const infPersonal = "Esta es una cuenta de Atlassian. Edite su información personal y los ajustes de visibilidad en su Perfil de Atlassian.Para obtener más información, consulte nuestras Condiciones del Servicio o nuestra Política de Privacidad"

    const updateInfo = async e => {

        e.preventDefault();
        let info = {
            full_name: e.target.full_name.value,
            bio: e.target.bio.value
        }

        defaultFetch("/update-user", "POST", info)
        .then((res) => res.json)
        .then((res) => {
           localStorage.setItem("user",JSON.stringify(info))
        });
        }
            

    return (

        <div className='info'>

            <NavPerfil />

            <img src={imagenPerfil} className="imgPerfil" />

            <h1 className='h1Info'>Gestione su información personal</h1>

            <p className="personal">{infPersonal}</p>

            <p className='pAce'>Acerca de:</p>

            <hr className='hr' />


            <form onSubmit={updateInfo} className='formInfo'>

                <p className='pName'>Nombre de usuario</p>

                <input name='full_name' className='userNamePerfil' defaultValue={userPerfil.full_name}></input>

                <p className='pBio'>Biografía</p>

                <textarea cols="50" rows="7" className='bio' name='bio' defaultValue={userPerfil.bio}></textarea>

                <br />

                <input type="submit" className="btnInfo" />

            </form>


        </div>
    )
}