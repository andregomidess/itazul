import CardLogin from '@/components/ui/CardLogin';
import style from './style.module.scss'
import Input from '@/components/ui/Input';

const Signup = () => {
  return (
    <div>
      <CardLogin>
        <div className={style.box}>
            <h2 className='mt-5 mb-5'>Registrar-se</h2>
            <Input className='input mb-4' placeholder='E-mail'></Input>
            <Input className='input mb-4' placeholder='CPF'></Input>
            <Input className='input mb-4' placeholder='Celular'></Input>
            <Input className='input mb-4' placeholder='Senha'></Input>
            <Input className='input mb-4' placeholder='Confirmar senha'></Input>
            <button className='btn-primary'>Finalizar registro</button>
        </div>
      </CardLogin>
    </div>
  );
}

export default Signup;