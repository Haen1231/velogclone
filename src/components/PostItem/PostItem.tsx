import React from 'react';

import { GetPostResponse } from '../../services/post/type';

import styles from './PostItem.module.scss';

interface Props {
  item: GetPostResponse;
}

const PostItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <div className={styles.postItem}>
        <div className={styles.postContent}>
          <span>{item.title}</span>
          <p>{item.body}</p>
        </div>
        <div className={styles.postFooter}>
          <span>by</span>
          <span>{item.userId}</span>
        </div>
      </div>
    </>
  );
};
export default PostItem;
