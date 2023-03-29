import React, { memo, ReactNode, useRef } from 'react';

import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal') as HTMLDivElement;

export interface Props {
  isShow: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalPotal: React.FC<Props> = ({ isShow, children, onClose }) => {
  const nodeRef = useRef(null);
  return createPortal(
    <CSSTransition in={isShow} timeout={100} nodeRef={nodeRef} unmountOnExit={true}>
      <div className={styles.potalwrapper} ref={nodeRef}>{children}</div>
    </CSSTransition>,
    modalRoot,
  );
};

export default memo(ModalPotal);
