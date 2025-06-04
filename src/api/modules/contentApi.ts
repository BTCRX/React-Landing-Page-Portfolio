// src/api/modules/contentApi.ts
import api from '../ApiConnect';
import type { ContentType } from '../../utils/content';

export const ContentAPI = {
  getContent: async (): Promise<ContentType> => {
    const res = await api.get('/content');
    return res.data;
  },

  updateContent: async (data: ContentType): Promise<ContentType> => {
    const res = await api.put('/content', data);
    return res.data;
  },
};
