import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:5000/',
  baseURL: 'https://new-blog-api-postgres.vercel.app/',
})

export default api
