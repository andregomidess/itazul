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
        <h3>Adicionar Meio de Pagamento</h3>
          <select className="input mb-3">
            <option>Nome Impresso no Cartão</option>
          </select>
          <select className="input mb-3">
            <option>Número do Cartão</option>
          </select>
          <div className={style.form}>
          <select className="input mb-3">
            <option>Data de Validade</option>
          </select>
          <select className="input mb-3">
            <option>CVV</option>
          </select>
          </div>
      </div>
      </div>
      <div className={style.buttonBox}>
        <button type="button" className={`btn btn-primary btn-lg btn-block ${style.noBorder}`}>Adicionar Veículo</button>
      </div>
      <div className="modal-overlay"></div>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalAddVehicle;
