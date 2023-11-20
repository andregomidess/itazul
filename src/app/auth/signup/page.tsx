'use client'
import CardLogin from "@/components/ui/CardLogin";
import style from "./style.module.scss";
import Input from "@/components/ui/Input";
import { z } from "zod";
import UserService from "@/app/services/userService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

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
  password: z.string().nonempty("A senha é obrigatório"),
  confirmPassword: z.string().nonempty("A confirmação da senha é obrigatório"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Senhas diferentes",
  path: ["confirmPassword"],
});

const userService = new UserService();

const Signup = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const createUpdateUser = async (data: any) => {
    delete data.confirmPassword;
    console.log(data);
    try {
      const res = await userService.createUser(data);
      console.log(res);
      toast.success('Usuário criado com sucesso!');
    } catch (e) {
      console.error(e);
      toast.error('erro ao criar usuário!');
    }
  };

  return (
    <div>
      <CardLogin>
        <form onSubmit={handleSubmit(createUpdateUser)} className={style.box}>
          <h2 className="mt-5 mb-5">Registrar-se</h2>
          <div className="mb-4">
            <Input
              className="input"
              placeholder="Nome"
              {...register("name")}
            ></Input>
             {errors.name && <span className="error-message">{errors.name.message?.toString()}</span>}
          </div>
          <div className="mb-4">
            <Input
              className="input "
              placeholder="E-mail"
              {...register("email")}
            ></Input>
             {errors.email && <span className="error-message">{errors.email.message?.toString()}</span>}
          </div>
          <div className="mb-4">
            <Input
              className="input"
              placeholder="CPF"
              {...register("register")}
            ></Input>
             {errors.register && <span className="error-message">{errors.register.message?.toString()}</span>}
          </div>
          <div className="mb-4">
            <Input
              className="input"
              placeholder="Celular"
              {...register("cellphone")}
            ></Input>
             {errors.cellphone && <span className="error-message">{errors.cellphone.message?.toString()}</span>}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              className="input"
              placeholder="Senha"
              {...register("password")}
            ></Input>
             {errors.password && <span className="error-message">{errors.password.message?.toString()}</span>}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              className="input"
              placeholder="Confirmar senha"
              {...register("confirmPassword")}
            ></Input>
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message?.toString()}</span>}
          </div>
          <button type="submit" className="btn-primary">Finalizar registro</button>
        </form>
      </CardLogin>
    </div>
  );
};

export default Signup;
