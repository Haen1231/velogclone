import React, { memo, MouseEventHandler, ReactNode, useRef } from 'react';

import cx from 'clsx';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal') as HTMLDivElement;

export interface Props {
  isShow: boolean;
  onClose: MouseEventHandler<HTMLElement>;

  className?: string;
  children?: ReactNode;
}

const ModalPotal: React.FC<Props> = ({
  isShow,
  children,
  onClose,
  className,
}) => {
  const nodeRef = useRef(null);
  return createPortal(
    <CSSTransition
      in={isShow}
      timeout={100}
      nodeRef={nodeRef}
      classNames={{
        enterActive: styles.enterActive,
      }}
      unmountOnExit
    >
      <div className={styles.enterActive}>
        <div
          role={'button'}
          tabIndex={-1}
          className={styles.potalwrapper}
        ></div>
        <aside className={cx(styles.modalWrapper, className)} ref={nodeRef}>
          {children}
        </aside>
      </div>
    </CSSTransition>,
    modalRoot,
  );
};

export default memo(ModalPotal);
