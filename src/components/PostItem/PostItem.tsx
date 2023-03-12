import React, { MouseEventHandler, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import likeOff from '../../Img/like_off.png';
import likeOn from '../../Img/like_on.png';
import userProfile from '../../Img/user_profile.png';
import { GetPostResponse } from '../../services/post/type';

import styles from './PostItem.module.scss';

interface Props {
  item: GetPostResponse;
}

const PostItem: React.FC<Props> = ({ item }) => {
  const [likeState, setLikeState] = useState(true);
  const [likes, setLikes] = useState(17);
  const navigator = useNavigate();

  const onClickLike: MouseEventHandler<HTMLDivElement> = (e) => {
    likeState ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    setLikeState((prev) => !prev);
  };

  const onClickPost: MouseEventHandler<HTMLDivElement> = (e) => {
    navigator(`/post/`, { state: item });
  };

  return (
    <div className={styles.postMain}>
      <div className={styles.post}>
        <div className={styles.postItem}>
          <div onClick={onClickPost}>
            <div className={styles.post_img}>
              <img src="https://picsum.photos/320/150" />
            </div>
            <div className={styles.postContent}>
              <span>{item.title}</span>
              <p>{item.body}</p>
              <div className={styles.sub_info}>
                <span>2일전 · 37개의 댓글</span>
              </div>
            </div>
          </div>
          <div className={styles.postFooter}>
            <div className={styles.user_info}>
              <img
                src={userProfile}
                alt="userProfile_IMG"
                width="24px"
                height="24px"
              />
              <span>by</span>
              <span>{item.userId}</span>
            </div>
            <div className={styles.likes}>
              <img
                src={likeState ? likeOn : likeOff}
                alt="like_IMG"
                width="12px"
                height="12px"
                onClick={onClickLike}
              />
              {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
