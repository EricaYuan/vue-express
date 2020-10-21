import Api from './Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'xx',
//   pwd: 'xx'
// })