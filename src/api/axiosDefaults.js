import axios from "axios";

axios.defaults.baseURL = 'https://react-backend-1102dd957763.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true