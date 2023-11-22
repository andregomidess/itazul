'use client'

import style from "./style.module.scss";
import Image from "next/image";
import logo from "../../../assets/logo-2.svg";
import menu from "../../../assets/menu.svg";
import Input from "@/components/ui/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserService from "@/app/services/userService";
import { toast } from "react-toastify";
import { use, useEffect, useState } from "react";
import { compareObjects } from "@/utils/compare";
import ModalAddVehicle from "@/components/ui/ModalAddVehicle";
import Link from "next/link";
import { useRouter } from "next/navigation";

const createUserSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório").max(50),
  register: z
    .string()
    .nonempty("O CPF é obrigatório")
    .refine((value) => value.replace(/[^\d]/g, "").length === 11, {
      message: "O CPF deve ter 11 dígitos.",
    })
    .transform((cpf) => {
      return cpf.replace(/[^\d]/g, "");
    }),
  email: z.string().nonempty("O email é obrigatório"),
  cellphone: z.string().nonempty("O telefone é obrigatório"),
});

const userService = new UserService();

const EditProfile = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });
  const router = useRouter();

  const [user, setUser] = useState();
  const [vehicles, setVehicles] = useState([]);

  const updateUser = async (data: any) => {
    console.log(data);
    const putValues = compareObjects(data, user);
    console.log(putValues);
    try {
      const res = await userService.updateUser(localStorage.getItem('id')!, data);
      console.log(res);
      //if (res) toast.success('Usuário atualizado com sucesso!');
    } catch (e) {
      console.error(e);
      toast.error('Erro ao atualizar usuário!');
    }
  };

  

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      router.push("/auth/signin");
    }
    
    const getUserById = async () => {
      const id = localStorage.getItem('id');
      try{
        if (id){
          const res = await userService.getUserById(id);
          if(res) {
            console.log(res);
            setUser(res);
          }
        }
      } catch (e){
        toast.error('erro ao puxar o usuário!')
      }
    }

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
    getUserById();
  }, [vehicles])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <figure>
          <Image src={logo} alt="logo da itaZul" />
        </figure>
        <figure>
          <Image src={menu} alt="Menu" />
        </figure>
      </div>
      <div className={style.headerText}>
        <Link href={'/'} className={style.backButton}>voltar</Link>
        <h3>Editar Perfil</h3>
      </div>

      <form onSubmit={handleSubmit(updateUser)}>
        {user && <div className={style.section}>
          <h3>Dados Pessoais</h3>
          <div>
            <Input className="input mb-3" placeholder="Nome" defaultValue={user?.name} {...register('name')}></Input>
            {errors.name && <span className="error-message">{errors.name.message?.toString()}</span>}
          </div>
          <div>
            <Input className="input mb-3" placeholder="xxx.xxx.xxx-xx" defaultValue={user?.register} {...register('register')}></Input>
            {errors.register && <span className="error-message">{errors.register.message?.toString()}</span>}
          </div>
          <div>
            <Input className="input mb-3" placeholder="E-mail" defaultValue={user?.email} {...register('email')}></Input>
            {errors.email && <span className="error-message">{errors.email.message?.toString()}</span>}
          </div>
          <div>
            <Input className="input mb-3" placeholder="Celular" defaultValue={user?.cellphone} {...register('cellphone')}></Input>
            {errors.cellphone && <span className="error-message">{errors.cellphone.message?.toString()}</span>}
          </div>
        </div>}
        <hr className={style.divider} />
        <div className={style.section}>
          <h3>Veículos Cadastrados</h3>
          <div className={style.form}>
            <select className="input mb-3">
            {vehicles &&
              vehicles.map((vehicle: any) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.model + ' - ' + vehicle.color}
                </option>
              ))}
            </select>
            <ModalAddVehicle setVehicle={setVehicles}/>
          </div>
        </div>
        <hr className={style.divider} />
        <div className={style.section}>
          <h3>Meio de Pagamentos Cadastrados</h3>
          <div className={style.form}>
            <select className="input mb-3">
              <option value={null} selected disabled>Selecionar Meio de Pagamento</option>
              <option value={'PIX'}>PIX</option>
              <option value={'debito'}>Debito</option>
              <option value={'credito'}>Credito</option>
            </select>
            {/* <button className={style.backButton}>{"+"}</button> */}
          </div>
        </div>
        <hr className={style.divider} />
        <div className={style.buttonBox}>
          <button
            type="submit"
            className={`btn btn-primary btn-lg btn-block ${style.noBorder}`}
          >
            Editar Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
