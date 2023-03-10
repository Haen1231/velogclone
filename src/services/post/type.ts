export interface GetPostResponse {
  userId: number;
  id: number;
  title: string;
  body : string;
}

export interface CreatePostBody extends GetPostResponse {};
