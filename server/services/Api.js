import axios from 'axios'

export default () => { // return a connector
  return axios.create({
    baseURL: `http://localhost:8083/`
  })
}