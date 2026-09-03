import {useState} from 'react';
import {createPortal} from 'react-dom';
import Header from '../header/header';
import styles from './modal.module.css';

function Modal({isOpen, onClose, children, title}){
    if(!isOpen) return null;

    return createPortal(
        <div className={`${styles.modal} ${styles.modalOverlay}`}>
            <div className={styles.modalContent}>
                <Header title={title} bgColor="bg-white">
                    <button className={`${styles.button} cursor-pointer`} onClick={onClose}>X</button>
                </Header>
                <hr className='text-gray-300' />
                <section>
                    {children}
                </section>
            </div>
            
        </div>,
        document.getElementById('root')
    );

}

export default Modal;