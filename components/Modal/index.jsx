import styles from "./styles.module.css";

const Modal = ({children, exit}) => {
  return (<div data-testid="modal" className={styles.modal} onClick={exit}>
    <div data-testid='modal-container' className={styles.container} onClick={e => e.stopPropagation()} >
      {children}
    </div>
  </div>);
}

export default Modal;