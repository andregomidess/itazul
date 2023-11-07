import CardLogin from '@/components/ui/CardLogin';
import style from './style.module.scss';
import Input from '@/components/ui/Input';

const ForgotPassword = () => {
  return (
    <div>
         <CardLogin>
            <div className={style.box}>
                <h2 className='mt-5 mb-5'>Insira o seu e-mail cadastrado</h2>
                <Input className='input mb-4' placeholder='E-mail'></Input>
                <button className='btn-primary'>Enviar e-mail</button>
            </div>
        </CardLogin>
    </div>
  );
}

export default ForgotPassword;