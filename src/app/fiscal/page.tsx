'use client'
import { useEffect, useState } from 'react'
import style from './style.module.scss';
import Image from "next/image";
import logo from "../../assets/logo-2.svg";
import menu from "../../assets/menu.svg";
import Link from 'next/link';
import SectionInfoDriver from "@/components/ui/SectionInfoDriver";
import UserService from '../services/userService';

const userService = new UserService();


const Fiscal = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfoParkingSession = async () => {
      try{
        const res = await userService.getParkingSessionByStret('1');
        if (res) setInfo(res);
      }catch(e){
        console.log(e);
      }
    }

    getInfoParkingSession();
  }, [])

  return (
    <div className=" section relative w-screen h-screen">
        <header>
        <div className={style.box}>
            <div className="logo">
            <Image src={logo} alt="logo da itaZul" />
            </div>
            <div className="menu">
            <Link href={'/auth/edit-profile'}>
                <Image src={menu} alt="menu da itaZul" />
            </Link>
            </div>
        </div>
        </header>

        {info && <div className={style.section}>
            <h3 className={style.title}>Zona Azul Vigente</h3>
            {info.map((item) => (
              <SectionInfoDriver item={item}/>
            ))}
            

        </div>}

    </div>
  );
}

export default Fiscal;