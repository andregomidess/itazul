import dynamic from "next/dynamic";
import logo from "../assets/logo-2.svg"
import menu from "../assets/menu.svg"
import Image from 'next/image'
import style from './home.module.scss'


const Map = dynamic(() => import('../components/ui/Map'), {ssr: false});

export default function Home() {
  return (
    <div>
      <header>
        <div className={style.box}>
          <div className="logo">
            <Image
              src={logo}
              alt='logo da itaZul'
            />
          </div>
          <div className="menu">
          <Image
              src={menu}
              alt='logo da itaZul'
            />
          </div>
        </div>
      </header>
      <Map/>
    </div>
  );
}
