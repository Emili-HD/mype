import axios from 'axios'

// const DOMAIN_URL = 'http://localhost:8888/mype'
const DOMAIN_URL = 'https://houseandsound.com/administracio'
const JSON_URL = DOMAIN_URL + '/wp-json'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient
  .get(JSON_URL)
  .then(response => {
    console.log(response);
  })
  .catch(e => console.log(e));

export default {
  getMenu(id = 3) {
    // return apiClient.get(JSON_URL + '/menus/v1/menus/' + id)
    return apiClient.get(`${JSON_URL}/menus/v1/menus/${id}`)
  },
  getPages() {
    return apiClient.get(`${JSON_URL}/wp/v2/pages`)
  },
  getSinglePage(id) {
    return apiClient.get(`${JSON_URL}/wp/v2/pages/${id}`)
  },
}
