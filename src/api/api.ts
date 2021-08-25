import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const userAPI = {
  async registration(email: String, password: String) {
    try {
      const res = await $host.post('auth/registration', { email, password });
      return res;
    } catch (e) {
      return e;
    }
  },
  async login(email: String, password: String) {
    try {
      const res = await $host.post('auth/login', { email, password });
      return res;
    } catch (e) {
      return e;
    }
  },
};
