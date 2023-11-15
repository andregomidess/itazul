import React, { useState } from "react";
import style from './style.module.scss';
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import icon from '../../../assets/finalization-icon.svg';
import Image from "next/image";


export default function Modal() {
  const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <button className="btn-primary w-full" onClick={() => setVisible(true)}>Confirmar</button>
            <Dialog header="Zona Azul Paga com Sucesso!" visible={visible} style={{ width: '70vw' }} onHide={() => setVisible(false)}>
                <Image
                  src={icon}
                  alt="icone de finalização"
                />
                <button className="btn-primary w-full mt-5">Fechar</button>
            </Dialog>
        </div>
    )
}