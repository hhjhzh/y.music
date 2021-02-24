import axios from 'axios'
// axios.defaults.baseURL = 'http://music.it666.com:3666';
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.timeout = 3000

class NJHttp {
  static get (url = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(url, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  static post (url = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(url, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}

export default NJHttp
