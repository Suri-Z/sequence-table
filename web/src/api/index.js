import axios from 'axios'
export default function (url, methods, params) {
  return axios({
    url,
    methods,
    [methods.toLowerCase() === 'get' ? 'params' : 'data']: params
  })
}
