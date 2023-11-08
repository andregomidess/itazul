import CardLogin from '@/components/ui/CardLogin';
import style from './style.module.scss'
import Input from '@/components/ui/Input';

const ChangePassword = () => {
  return (
    <div>
       <CardLogin>
        <div className={style.box}>
            <h2 className='mt-5 mb-5'>Crie sua nova senha</h2>
            <Input className='input mb-4' placeholder='Senha'></Input>
            <Input className='input mb-4' placeholder='Confirmar senha'></Input>
            <button className='btn-primary'>Trocar senha</button>
        </div>
      </CardLogin>
    </div>
  );
}

export default ChangePassword;