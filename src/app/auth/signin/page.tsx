import style from './style.module.scss'
import Image from 'next/image'
import logo from '../../../assets/logo.svg';
import CardLogin from '@/components/ui/CardLogin';
import Input from '@/components/ui/Input';
import Link from 'next/link';

const Signin = () => {
  return (
    <div>
        <CardLogin>
            <div className={style.inputBox}>
                <h2 className='mt-5 mb-5'>Login</h2>
                <Input className='input mb-3' placeholder='E-mail'></Input>
                <Input className='input' placeholder='Senha'></Input>
            </div>
            <Link className={style.forgotPassword} href={'/auth/forgot-password'}>Esqueci minha senha</Link>
            <div className={style.buttonBox}>
                <button className='btn-primary mb-2'>Login</button>
                <button className='btn-secondary'>Registrar</button>
            </div>
        </CardLogin>

        
    </div>
  );
}

export default Signin;