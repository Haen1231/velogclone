import apiClient from '../apiClient';

import { CreatePostBody, GetPostResponse } from './type';

export const getPostsApi = () => apiClient.get<GetPostResponse[]>('/posts');

export const createPostApi = (body: CreatePostBody) =>
  apiClient.post('/posts', body);
