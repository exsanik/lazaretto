import Api from '../helpers/Api'

import { UserLogin, PatientSignUp } from '../types/inputs'

import { deserializer } from './Deserializer'

const deserialize = deserializer()

class Lazaretto extends Api {
  /**
   * User login
   */
  login = (user: UserLogin) => {
    this.setAuthToken()
    return this.post('/api/v1/login', {
      data: {
        user
      }
    }).then(deserialize)
  }

  auth = () => this.get('/api/v1/auth').then(deserialize)

  /**
   * User login
   */
  signup = (user: PatientSignUp) =>
    this.post('/api/v1/signup', {
      data: {
        user
      }
    }).then(deserialize)
}

export default new Lazaretto({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
