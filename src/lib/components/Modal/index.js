import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useDispatch } from 'react-redux';
import { dispatchCloseModal } from 'src/redux/reducers/modalReducer';
import { removeScrollClsOnBody } from 'src/utils/utility';

const Modal = ({ children, name }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();

  const modalClose = () => {
    removeScrollClsOnBody();
    dispatch(dispatchCloseModal(name));
  };

  return (
    <div ref={modalRef} className="modal-wrapper">
      <div className="modal-container">
        <div className="close-modal" onClick={modalClose}>
          &#x2715;
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
export default Modal;
