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

apiClient.get(JSON_URL).then(response => {
  console.log(response);
}).catch(e => console.log(e));

const getPosts = (page = 1, perPage = 10) => {
  const url = `${JSON_URL}/wp/v2/posts`
  const params = {
    per_page: perPage,
    page: page,
  }

  return axios.get(url, { params })
}

export default {
  getMenu(id = 3) {
    return apiClient.get(`${JSON_URL}/menus/v1/menus/${id}`)
  },

  // Recoger las páginas
  getPages() {
    return apiClient.get(`${JSON_URL}/wp/v2/pages`)
  },
  getSinglePage(id) {
    return apiClient.get(`${JSON_URL}/wp/v2/pages/${id}`)
  },
  getSinglePageBySlug(slug) {
    return apiClient.get(`${JSON_URL}/wp/v2/pages?slug=${slug}`)
  },

  // Recoger los posts
  getPosts,
  getSinglePostBySlug(slug) {
    return apiClient.get(`${JSON_URL}/wp/v2/posts?slug=${slug}`)
  },

}
