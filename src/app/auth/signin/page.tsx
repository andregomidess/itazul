'use client'
import style from './style.module.scss'
import Image from 'next/image'
//import logo from '../../../assets/logo.svg';
import CardLogin from '@/components/ui/CardLogin';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import AuthService from '@/app/services/authService';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const authService = new AuthService();

const loginSchema = z.object({
  email: z.string().nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatório"),
})

const Signin = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const login = async (data: any) => {
    delete data.confirmPassword;
    console.log(data);
    try {
      const res = await authService.login(data);
      console.log(res);
      if(res) {
        toast.success('Usuário Logado');
        router.push('/')
      }
    } catch (e) {
      console.error(e);
      toast.error('Erro ao logar');
    }
  };
  return (
    <div>
        <CardLogin>
            <form onSubmit={handleSubmit(login)}>
              <div className={style.inputBox}>
                  <h2 className='mt-5 mb-5'>Login</h2>
                  <Input className='input mb-3' placeholder='E-mail' {...register('email')}></Input>
                  <Input type='password' className='input' placeholder='Senha' {...register('password')}></Input>
              </div>
              <Link className={style.forgotPassword} href={'/auth/forgot-password'}>Esqueci minha senha</Link>
              <div className={style.buttonBox}>
                  <button type='submit' className='btn-primary mb-2'>Login</button>
                  <button type='button' className='btn-secondary'>Registrar</button>
              </div>
            </form>
        </CardLogin>

        
    </div>
  );
}

export default Signin;