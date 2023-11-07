import style from './style.module.scss'
import Image from 'next/image'
import logo from '../../../assets/logo.svg';

function CardLogin({children} : {
    children: React.ReactNode
  }) {
  return (
    <div className={style.bg}>
        
        <div className={style.boxContent}>
            <figure className='text-center mb-8'>
                <Image
                src={logo}
                alt='logo da itaZul'
                />
            </figure>
            <div className={style.card}>
                {children}
            </div>
        </div>
        
    </div>
    
  );
}

export default CardLogin;