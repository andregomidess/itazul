// ModalAddVehicle.js
import style from './style.module.scss'

import React, { ReactNode } from 'react';

interface ModalAddVehicleProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Adicione a propriedade 'children' aqui
}

const ModalAddVehicle: React.FC<ModalAddVehicleProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal">
      <div className={style.section}>
        <h1 className={style.center}>12:20h - 13:26h</h1>
        <h3 className={style.center}>Valor Total: <b>R$3,00</b></h3>
        <h4 className={style.ciano}>Veículo Selecionado:</h4>  
        <h4>Toyota Étios (prata) - PWN5746</h4>  
        <h4 className={style.ciano}>Meio de Pagamento</h4>  
        <h4>Master Card- Final 4567</h4>  
        <h4 className={style.ciano}>Endereço:</h4>  
        <h4>Avenida</h4>  
      </div>
      </div>
      <div className={style.buttonBox}>
        <button type="button" className={`btn btn-primary btn-lg btn-block ${style.noBorder}`}>Confirmar</button>
      </div>
      <div className="modal-overlay"></div>

        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalAddVehicle;
