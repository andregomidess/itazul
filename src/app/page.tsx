'use client'
import dynamic from "next/dynamic";
import logo from "../assets/logo-2.svg";
import menu from "../assets/menu.svg";
import plus from "../assets/plus-i.svg";
import Image from 'next/image';
import style from './home.module.scss';
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import line from "../assets/line.svg";


const Map = dynamic(() => import('../components/ui/Map'), {ssr: false});

export default function Home() {

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="relative w-screen h-screen">
      <header>
        <div className={style.box}>
          <div className="logo">
            <Image
              src={logo}
              alt='logo da itaZul'
            />
          </div>
          <div className="menu">
          <Image
              src={menu}
              alt='logo da itaZul'
            />
          </div>
        </div>
      </header>
      <div onClick={() => setIsOpenModal(!isOpenModal)} className={style.roundedBtn}>
        <Image
          src={plus}
          alt='Icone de marcar zona azul'
        />
      </div>
      
      <div style={{height: '89vh'}}>
        <Map/>
      </div>
      {isOpenModal && 
        <Modal>
          <figure onClick={() => setIsOpenModal(!isOpenModal)} >
            <Image
              src={line}
              alt="Fechar modal"
            />
          </figure>
          <h2>12:20h</h2>
          <div>
            <div className="mb-4">
              <select
                className="input"
              >
                <option value="" selected>Selecionar Veículo</option>
              </select>
            </div>
            <div>
              <select
                className="input"
              >
                <option value="" selected>Selecionar Meio de Pagamento</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <button className='btn-primary w-full'>
              Confirmar
            </button>
          </div>
        </Modal>
      }
    </div>
  );
}
