import React from 'react';

import { useQuery } from 'react-query';

import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import PostItem from '../../components/PostItem/PostItem';
import { getPostsApi } from '../../services/post';

import styles from './HomePages.module.scss';

const HomePage: React.FC = () => {
  const { data } = useQuery(['getPost'], () =>
    getPostsApi().then((res) => res.data),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
      </div>
      <div className={styles.body}>
        <NavBar />
        <div className={styles.postWrapper}>
          {data?.map((item) => (
            <PostItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;