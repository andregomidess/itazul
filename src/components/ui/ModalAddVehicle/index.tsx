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
        <h3>Adicionar Veículo</h3>
          <select className="input mb-3">
            <option>Marca do Veículo</option>
          </select>
          <select className="input mb-3">
            <option>Modelo do Veículo</option>
          </select>
          <select className="input mb-3">
            <option>Cor do Veículo</option>
          </select>
          <select className="input mb-3">
            <option>Placa do Veículo</option>
          </select>
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
