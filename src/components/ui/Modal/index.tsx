import style from "./style.module.scss";

const Modal = ({ children } : { children: React.ReactNode  }) => {
  return (
    <div className={style.modal}>
            
        {children}
    </div>
  );
}

export default Modal;