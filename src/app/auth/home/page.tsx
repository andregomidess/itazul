import style from './style.module.scss'
import Image from 'next/image'
import logo from '../../../assets/logo-2.svg';
import phone from '../../../assets/phone.svg';
import menu from '../../../assets/menu.svg';
import CardLogin from '@/components/ui/CardLogin';
import Input from '@/components/ui/Input';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <figure>
          <Image
          src={logo}
          alt='logo da itaZul'
          />
        </figure>
      <figure>
          <Image
          src={menu}
          alt='Menu'
          />
      </figure>
      </div>
      <div className={style.headerText}>
        <h3>Zona Azul Vigente</h3>
      </div>

      <div className={style.arr}>
      <div className={style.form}>
        <h5>Rafael Frinhani - 12:20h - 13:26h</h5>
        <figure>
          <Image
          src={phone}
          alt='logo da itaZul'
          />
        </figure>
        <h5>(35) 98765-4321</h5>
      </div>
      <div className={style.form}>
        <h5>Toyota (prata) - PWNANAN</h5>
        <h5 className={style.verm}>Autoridade</h5>
      </div>
      </div>
      <div className={style.arr}>
      <div className={style.form}>
        <h5>Rafael Frinhani - 12:20h - 13:26h</h5>
        <figure>
          <Image
          src={phone}
          alt='logo da itaZul'
          />
        </figure>
        <h5>(35) 98765-4321</h5>
      </div>
      <div className={style.form}>
        <h5>Toyota (prata) - PWNANAN</h5>
        <h5 className={style.verm}>Autoridade</h5>
      </div>
      </div><div className={style.arr}>
      <div className={style.form}>
        <h5>Rafael Frinhani - 12:20h - 13:26h</h5>
        <figure>
          <Image
          src={phone}
          alt='logo da itaZul'
          />
        </figure>
        <h5>(35) 98765-4321</h5>
      </div>
      <div className={style.form}>
        <h5>Toyota (prata) - PWNANAN</h5>
        <h5 className={style.verm}>Autoridade</h5>
      </div>
      </div><div className={style.arr}>
      <div className={style.form}>
        <h5>Rafael Frinhani - 12:20h - 13:26h</h5>
        <figure>
          <Image
          src={phone}
          alt='logo da itaZul'
          />
        </figure>
        <h5>(35) 98765-4321</h5>
      </div>
      <div className={style.form}>
        <h5>Toyota (prata) - PWNANAN</h5>
        <h5 className={style.verm}>Autoridade</h5>
      </div>
      </div><div className={style.arr}>
      <div className={style.form}>
        <h5>Rafael Frinhani - 12:20h - 13:26h</h5>
        <figure>
          <Image
          src={phone}
          alt='logo da itaZul'
          />
        </figure>
        <h5>(35) 98765-4321</h5>
      </div>
      <div className={style.form}>
        <h5>Toyota (prata) - PWNANAN</h5>
        <h5 className={style.verm}>Autoridade</h5>
      </div>
      </div><div className={style.arr}>
      <div className={style.form}>
        <h5>Rafael Frinhani - 12:20h - 13:26h</h5>
        <figure>
          <Image
          src={phone}
          alt='logo da itaZul'
          />
        </figure>
        <h5>(35) 98765-4321</h5>
      </div>
      <div className={style.form}>
        <h5>Toyota (prata) - PWNANAN</h5>
        <h5 className={style.verm}>Autoridade</h5>
      </div>
      </div>
    </div>
  );
}

export default Home;