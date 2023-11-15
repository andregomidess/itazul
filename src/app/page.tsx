"use client";
import dynamic from "next/dynamic";
import logo from "../assets/logo-2.svg";
import menu from "../assets/menu.svg";
import plus from "../assets/plus-i.svg";
import Image from "next/image";
import style from "./home.module.scss";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import line from "../assets/line.svg";
import Link from "next/link";

const Map = dynamic(() => import("../components/ui/Map"), { ssr: false });

const ContentModal = ({ contentModalMain, contentModalConfirmation, contentModalFinalization  } : {contentModalMain : boolean, contentModalConfirmation: boolean, contentModalFinalization: boolean}) => {
  return (
    <>
    {/* Renderiza Modal Inicial */}
      {contentModalMain && 
      <>
        <h2>12:20h</h2>
        <div>
          <div className="mb-4 flex items-center">
            <select className="input">
              <option value="" selected>
                Selecionar Veículo
              </option>
            </select>
            <div className="me-1">
              <Link href={"/"} className={style.btnAdd}>
                <Image src={plus} alt="botão adicionar meio de veículo" />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <select className="input">
              <option value="" selected>
                Selecionar Meio de Pagamento
              </option>
            </select>
            <div className="me-1">
              <Link href={"/"} className={style.btnAdd}>
                <Image src={plus} alt="botão adicionar meio de pagamento" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="btn-primary w-full">Confirmar</button>
        </div>
      </>
      }

      {/* Renderiza Modal de confirmação */}
      {contentModalConfirmation && 
        <div className={style.modalConfirmation}>
          <div className={style.boxHour}>
            <h2>12:20h</h2>
            <div className={style.hourlyRate}>
              <span>Valor Hora:</span>
              <span>R$3,00</span>
            </div>
          </div>
          <div className={style.boxVehicle}>
            <span className={style.label}>Veículo Selecionado:</span>
            <span className="font-bold">Toyota Étios <span className="font-normal">(prata)</span> - PWN5746</span>
          </div>
          <div className={style.boxPayment}>
            <span className={style.label}>Meio de Pagamento:</span>
            <span className="info font-bold">Master card - Final 4567</span>
          </div>
          <div className="flex flex-col">
            <button className="btn-primary mb-3">Confirmar</button>
            <button className="btn-secondary">Voltar</button>
          </div>
        </div>
      }

      {/* Renderiza o modal de pagamento */}
      {contentModalFinalization && 
        <div className={style.modalFinalization}>
          <div className={style.boxValueHour}>
            <h2>12:20h - 13:26h</h2>
            <span>Valor a ser cobrado: <span className="font-bold">R$3,00</span></span>
          </div>
          <div className={style.boxVehicle}>
            <span className={style.label}>Veículo Selecionado:</span>
            <span className="font-bold">Toyota Étios <span className="font-normal">(prata)</span> - PWN5746</span>
          </div>
          <div className={style.boxPayment}>
            <span className={style.label}>Meio de Pagamento:</span>
            <span className="info font-bold">Master card - Final 4567</span>
          </div>
          <div className="w-full">
            <button className="btn-primary mb-3 w-full">Confirmar</button>
          </div>
        </div>
      }
    </>
  );
};

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isModalContentMain, setIsModalContentMain] = useState(false);
  const [isModalContentConfirmation, setIsModalContentConfirmation] = useState(false);
  const [isModalContentFinalization, setIsModalContentFinalization] = useState(false);


  return (
    <div className="relative w-screen h-screen">
      <header>
        <div className={style.box}>
          <div className="logo">
            <Image src={logo} alt="logo da itaZul" />
          </div>
          <div className="menu">
            <Image src={menu} alt="logo da itaZul" />
          </div>
        </div>
      </header>
      <div
        onClick={() => {setIsOpenModal(!isOpenModal), setIsModalContentMain(true)}}
        className={style.roundedBtn}
      >
        <Image src={plus} alt="Icone de marcar zona azul" />
      </div>

      <div style={{ height: "89vh" }}>
        <Map />
      </div>
      {isOpenModal && (
        <Modal>
          <figure onClick={() => setIsOpenModal(!isOpenModal)}>
            <Image src={line} alt="Fechar modal" />
          </figure>
          <ContentModal contentModalMain={isModalContentMain} contentModalConfirmation={isModalContentConfirmation} contentModalFinalization={isModalContentFinalization} />
        </Modal>
      )}
    </div>
  );
}
