import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, children, onClose, duration = 300, showCloseBtn }) => {
  const modal = useRef();
  const modalBg = useRef();
  const modalContent = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modal.current.classList.add('disable-click');
    modalBg.current.style.transitionDuration = duration + 'ms';
    modalContent.current.style.transitionDuration = duration + 'ms';

    setTimeout(() => {
      modalBg.current.style.opacity = 0.2;
      modalContent.current.style.opacity = 1;
      modalContent.current.style.top = 0;
    }, 20);

    setTimeout(() => {
      modal.current.classList.remove('disable-click');
    }, duration + 20);

    return () => {
      document.body.style.overflow = 'visible';
    }
  }, [duration]);

  const modalCloseHandler = () => {
    modal.current.classList.add('disable-click');
    modalBg.current.style.opacity = 0;
    modalContent.current.style.opacity = 0;
    modalContent.current.style.top = '-100px';

    setTimeout(() => {
      modal.current.classList.remove('disable-click');
      onClose();
    }, duration);
  }

  return(
    <div className="modal" ref={modal}>
      <div className="modal__bg" onClick={modalCloseHandler} ref={modalBg}></div>
      <div className="modal__inner" ref={modalContent}>
        <div className="modal__head">
          <h2>{title}</h2>
          {showCloseBtn && <button className="btn" onClick={modalCloseHandler}>&times;</button>}
        </div>
        <div className="modal__body">
          {children}
        </div>
        <div className="modal__foot">
          <a href="/#" onClick={modalCloseHandler}>Close</a>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  showCloseBtn: PropTypes.bool
}

export default Modal;