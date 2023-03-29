import React from 'react';

import Dialog from '../Dialog/Dialog';

import { Props } from './ModalPotal';

const Modal: React.FC<Props> = ({ isShow, children, onClose }) => {
  return <Dialog isShow={isShow} onClose={onClose} />;
};

export default Modal;
