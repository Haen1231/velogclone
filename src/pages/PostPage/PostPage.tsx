import React from 'react';

import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import userProfile from '../../assets/user_profile.png';

import styles from './PostPage.module.scss';

const PostPage: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <div className={styles.titleWrapper}>
          <h1>{location.state.title}</h1>
        </div>
        <div className={styles.user_info}>
          <img
            src={userProfile}
            alt="userProfile_IMG"
            width="24px"
            height="24px"
          />
          <span>{location.state.userId}</span>
        </div>
        <div className={styles.content}>
          <div>
            <img src="https://picsum.photos/760/500" />
          </div>
          <div className={styles.contentBody}>{location.state.body}</div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
