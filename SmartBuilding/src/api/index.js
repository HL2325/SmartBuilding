import axios from 'axios'

let Ax = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 8000
})

export function getTit() {
  return Ax.get(`/static/mockTit.json`)
}

export default Ax