import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
const api = axios.create({
  adapter: jsonpAdapter,
  baseURL: 'https://receitaws.com.br/v1/cnpj/'
})

export default api
