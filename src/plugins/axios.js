import axios from 'axios'
import ls from 'local-storage'

const SERVER = {
  URL: process.env.NODE_ENV === 'production' ? '/api/' : 'http://127.0.0.1:8000/SIDU/api/',
  TOKEN: ls.get('token')
}

const Query = (user, api) => { return axios.post(SERVER.URL + api, user) }
const Authorization = (user, api) => { return axios.post(SERVER.URL + api, user, { headers: { Authorization: SERVER.TOKEN, 'Content-Type': 'application/json' } }) }

export default class Service {
  login = (user) => { return Query(user, 'user.php') }
  perfil = (user) => { return Authorization(user, 'user.php') }
  crearUsuario = (user) => { return Authorization(user, 'user.php') }
  modificarUsuario = (user) => { return Authorization(user, 'user.php') }
  catalogoUsuarios = (user) => { return Authorization(user, 'user.php') }
}
