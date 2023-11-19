import style from './style.module.scss'
import Image from 'next/image'
import logo from '../../../assets/logo-2.svg';
import menu from '../../../assets/menu.svg';
import CardLogin from '@/components/ui/CardLogin';
import Input from '@/components/ui/Input';
import Link from 'next/link';

const EditProfile = () => {
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
        <button className={style.backButton}>{'<'}</button>
        <h3>Editar Perfil</h3>
      </div>
      
      <div className={style.section}>
        <h3>Dados Pessoais</h3>
        <Input className='input mb-3' placeholder='Nome'></Input>
        <Input className='input mb-3' placeholder='Sobrenome'></Input>
        <Input className='input mb-3' placeholder='xxx.xxx.xxx-xx'></Input>
        <Input className='input mb-3' placeholder='E-mail'></Input>
        <Input className='input mb-3' placeholder='Celular'></Input>
      </div>

      <hr className={style.divider} />

      <div className={style.section}>
        <h3>Veículos Cadastrados</h3>
        <div className={style.form}>
          <select className="input mb-3">
            <option>Selecionar Veículo</option>
          </select>
          <button className={style.backButton}>{'+'}</button>
        </div>
      </div>

      <hr className={style.divider} />
    
      <div className={style.section}>
        <h3>Meio de Pagamentos Cadastrados</h3>
        <div className={style.form}>
          <select className="input mb-3">
            <option>Selecionar Meio de Pagamento</option>
          </select>
          <button className={style.backButton}>{'+'}</button>
        </div>
      </div>

      <hr className={style.divider} />

      <div className={style.buttonBox}>
        <button type="button" className={`btn btn-primary btn-lg btn-block ${style.noBorder}`}>Editar Perfil</button>
      </div>
    </div>
  );
}

export default EditProfile;