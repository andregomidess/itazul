// ModalAddVehicle.js
import style from "./style.module.scss";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import Input from "../Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserService from "@/app/services/userService";
import { Toast } from "primereact/toast";
import { toast } from "react-toastify";

const vehicleSchema = z.object({
  plate: z.string(),
  manufacturer: z.string(),
  model: z.string(),
  color: z.string()
})

const userService = new UserService();

const ModalAddVehicle = ({setVehicle} : {setVehicle: any}) => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(vehicleSchema),
  });


  const createVehicle = async (data: any) => {
    if (localStorage.getItem('id')){
      try{

        data.user_id = localStorage.getItem('id');
        const res = await userService.createVehicle(data.user_id, data);
        if (res) toast.success('Veiculo criado com sucesso!');
      } catch (e){
        toast.error('Erro ao criar veiculo!')
      }

    }
  }

  return (
    <div className="card flex justify-content-center">
      <button type="button" className={style.backButton} onClick={() => setVisible(true)}>
        +
      </button>
      <Dialog
        header="Adicionar Veículo"
        visible={visible}
        style={{ width: "70vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="modal-overlay">
          <form onSubmit={handleSubmit(createVehicle)}>
            <div className="modal-content">
              <div className="modal">
                <div className={style.section}>
                  <Input className="input mb-3" placeholder="Marca do veículo" {...register('manufacturer')}></Input>
                  <Input className="input mb-3" placeholder="Modelo do veículo" {...register('model')}></Input>
                  <Input className="input mb-3" placeholder="Cor do veículo" {...register('color')}></Input>
                  <Input className="input mb-3" placeholder="Placa do veículo" {...register('plate')}></Input>
                </div>
              </div>
              <div className={style.buttonBox}>
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg btn-block ${style.noBorder}`}
                >
                  Adicionar Veículo
                </button>
              </div>
              <div className="modal-overlay"></div>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalAddVehicle;
