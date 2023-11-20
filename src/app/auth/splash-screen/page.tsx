import CardLogin from '@/components/ui/CardLogin';
import style from './style.module.scss'
import Image from 'next/image'
import Input from '@/components/ui/Input';
import logo from '../../../assets/logo-2.svg';

const Signup = () => {
  return (
    <div className={style.fundo}>
      <div className={style.center}>
        <figure>
          <Image
          src={logo}
          alt='logo da itaZul'
          />
        </figure>
      </div>
    </div>
  );
}

export default Signup;