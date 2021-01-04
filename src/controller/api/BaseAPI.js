import axios from 'axios'

const BaseAPI = axios.create({
  url: '',
  timeout: 12000
})

export const someMethod = () => {

}

export default BaseAPI
