// src/api/modules/authApi.ts
import api from '../ApiConnect';

export const AuthAPI = {
  login: async (email: string, password: string) => {
    const res = await api.post('/login', { email, password });
    return res.data;
  },

  register: async (email: string, password: string) => {
    const res = await api.post('/register', { email, password });
    return res.data;
  },
};
