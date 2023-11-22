"use client";
import dynamic from "next/dynamic";
import logo from "../../../assets/logo-2.svg";
import menu from "../../../assets/menu.svg";
import plus from "../../../assets/plus-i.svg";
import Image from "next/image";
import style from "./home.module.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";
import line from "../../../assets/line.svg";
import Link from "next/link";
import Timer from "@/components/ui/Timer";
import ModalFinalization from "@/components/ui/ModalFinlization";
import UserService from "@/app/services/userService";
import { log } from "console";
import { useRouter } from "next/navigation";

const Map = dynamic(() => import("../../../components/ui/Map"), { ssr: false });

const userService = new UserService();

const ContentModal = ({ contentModalMain, setContentModalMain, contentModalConfirmation, SetContentModalConfirmation,  contentModalFinalization, SetContentModalFinalization  } : {contentModalMain : boolean, contentModalConfirmation: boolean, contentModalFinalization: boolean, setContentModalMain: any, SetContentModalConfirmation: any, SetContentModalFinalization: any}) => {

  const [vehicles, setVehicles] = useState<any>(null);
  const [vehicleSelected, setVehicleSelected] = useState<any>(null);
  const [methodPaymentSelected, setMethodPaymentSelected] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const router = useRouter();


  useEffect(() => {
    const getVehicle = async () => {
      const id = localStorage.getItem('id');
      try{
        if (id){
          const res = await userService.getVehicle(id);
          if(res) {
            console.log(res);
            setVehicles(res);
          }
        }
      } catch (e){
        toast.error('erro ao puxar o veiculo!')
      }
    }
    getVehicle();
  }, []);

  const handleVehicleChange = (event: any) => {
    const vehicleSel = vehicles.filter((item: any) => item.id === event.target.value);
    console.log(vehicleSel);
    setVehicleSelected(vehicleSel);
  };

  const handleMethodPayment = (event: any) => {
    setMethodPaymentSelected(event.target.value);
    console.log(event.target.value);
  };

  const confirmMainModal = () => {
    if(methodPaymentSelected && vehicleSelected) {
      setContentModalMain(false);
      SetContentModalConfirmation(true);
    }
  }

  return (
    <>
    {/* Renderiza Modal Inicial */}
      {contentModalMain && 
      <>
        <h2>{currentTime.toLocaleTimeString()}</h2>
        <div>
          <div className="mb-4 flex items-center">
            <select className="input" onChange={handleVehicleChange} value={vehicleSelected ? vehicleSelected.id : null}>
              <option value={null} selected disabled>
                Selecionar Veículo
              </option>
              {vehicles &&
              vehicles.map((vehicle: any) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.model + ' - ' + vehicle.color}
                </option>
              ))}
            </select>
            <div className="me-1">
              <Link href={"/auth/edit-profile/"} className={style.btnAdd}>
                <Image  src={plus} alt="botão adicionar meio de veículo" />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <select className="input" onChange={handleMethodPayment}>
              <option value={null} selected disabled>Selecionar Meio de Pagamento</option>
              <option value={'PIX'}>PIX</option>
              <option value={'debito'}>Debito</option>
              <option value={'credito'}>Credito</option>
            </select>
            <div className="me-1">
              <Link href={"/auth/edit-profile/"} className={style.btnAdd}>
                <Image src={plus} alt="botão adicionar meio de pagamento" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="btn-primary w-full" onClick={() => confirmMainModal()}>Confirmar</button>
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
            {/* <button className="btn-primary mb-3 w-full">Confirmar</button> */}
            <ModalFinalization/>
          </div>
        </div>
      }
    </>
  );
};

interface HomeProps{
  params: {
    id: string
  }
}

export default function Home({params}: HomeProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isModalContentMain, setIsModalContentMain] = useState(false);
  const [isModalContentConfirmation, setIsModalContentConfirmation] = useState(false);
  const [isModalContentFinalization, setIsModalContentFinalization] = useState(false);

  const [street, setStreet] = useState<any>(null);

  useEffect(() => {

    const getStreetById = async () => {
      if (params.id){
        try {
          const res = await userService.getStreet(params.id);
          if (res) setStreet(res);
          console.log(res);
        }catch(e){
          toast.error('Erro ao puxar dadso da rua')
        }
      }
    }

    

    getStreetById();
  }, [])


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
      {/* Timer */}
      <Timer/>
      <div
        onClick={() => {setIsOpenModal(!isOpenModal), setIsModalContentMain(true)}}
        className={style.roundedBtn}
      >
        <Image src={plus} alt="Icone de marcar zona azul" />
      </div>
      
      {street && <div style={{ height: "89vh" }}>
        <Map latitude={street?.latitude} longitude={street?.longitude} />
      </div>}
      {isOpenModal && (
        <Modal>
          <figure onClick={() => setIsOpenModal(!isOpenModal)}>
            <Image src={line} alt="Fechar modal" />
          </figure>
          <ContentModal contentModalMain={isModalContentMain} setContentModalMain={setIsModalContentMain}  contentModalConfirmation={isModalContentConfirmation} SetContentModalConfirmation={setIsModalContentConfirmation} contentModalFinalization={isModalContentFinalization} SetContentModalFinalization={setIsModalContentFinalization} />
          
        </Modal>
      )}
    </div>
  );
}
