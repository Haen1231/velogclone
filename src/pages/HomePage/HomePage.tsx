import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import cx from 'clsx';
import { throttle } from 'lodash';
import { useQuery } from 'react-query';

import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import PostItem from '../../components/PostItem/PostItem';
import { getPostsApi } from '../../services/post';

import styles from './HomePages.module.scss';

const HomePage: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { data } = useQuery(['getPosts'], () =>
    getPostsApi().then((res) => res.data),
  );
  const [top, setTop] = useState(-20);

  const style = { '--top': `${top}px` } as CSSProperties;

  const beforeScrollY = useRef(0);

  const scrollEvent = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - beforeScrollY.current;
        if (currentScrollY === 0) {
          setIsHidden(true);
        } else {
          if (isHidden) {
            if (diff < -50) {
              setIsHidden(false);
              setTop(currentScrollY - 220);
            }
          } else {
            if (diff > 20) {
              setIsHidden(true);
            }
          }
        }
        //이전 스크롤값 저장
        beforeScrollY.current = currentScrollY;
      }, 500),
    [isHidden, beforeScrollY],
  );
    useEffect(() => {
        const handler = () => {};

        window.addEventListener('scroll', scrollEvent);

        return () => {
            window.removeEventListener('scroll', handler);
        }
    },[scrollEvent])

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.header}>
        <Header />
        <NavBar />
      </div>
      <div className={cx({ [styles.isHidden]: isHidden }, styles.eventHeader)}>
        <Header />
        <NavBar />
      </div>
      <div className={styles.body}>
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
