// Funcion para buscar usuarios: debemos pasarle formdata como objeto json
// Los sets son para recoger en un estado los usuarios y para que se cambie el estado a true si existen y se muestren en ese caso

import { getFetch } from "./defaultFetch";

export const findUsers = async (formData, setUserExists, setUsers) => {
    const res = await getFetch('/searchUser', 'post', formData)
    // let usersArray = [];
    // res.map(user => {
    //   usersArray.push(user)
    // })

    if (res.length > 0) {
      setUserExists(true)
      setUsers(res)
    } else {
      setUserExists(false)
    }
    return res
  }