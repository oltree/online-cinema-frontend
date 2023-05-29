import api from '@/api/api';

type FileType = {
  url: string;
  name: string;
};

export const FileService = {
  async upload(file: FormData, folder?: string) {
    const response = await api.post<FileType[]>('/files', file, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response?.data;
  },
};
