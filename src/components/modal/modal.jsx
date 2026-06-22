import {useState} from 'react';
import {createPortal} from 'react-dom';
import styles from './modal.module.css';

function Modal({isOpen, onClose, children}){
    if(!isOpen) return null;

    return createPortal(
        <div className={`${styles.modal} ${styles.modalOverlay}`}>
            <div className={styles.modalContent}>
                {children}
                <button onClick={onClose} className={styles.secondary}>
                    Close
                </button>
            </div>
            
        </div>,
        document.getElementById('root')
    );

}

export default Modal;