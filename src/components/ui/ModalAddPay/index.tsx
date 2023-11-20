// ModalAddVehicle.js
import { zodResolver } from '@hookform/resolvers/zod';
import style from './style.module.scss'

import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';


const ModalAddPay = () => {

  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
        <button>Fechar</button>
      </div>
    </div>
  );
};

export default ModalAddPay;
