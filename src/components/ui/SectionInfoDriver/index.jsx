import React from 'react'
import style from './styles.module.scss';
import Image from 'next/image';
import cellphone from '.././../../assets/cellphone.svg';

const SectionInfoDriver = ({item}) => {
  return (
    <div className={style.info}>
        <div className={style.nameCellphone}>
            <span className='font-bold'>{item.vehicle.user.name}</span>
            <span> <Image src={cellphone} alt='icone celular'></Image> {item.vehicle.user.cellphone}</span>
        </div>
        <span><strong>{item.vehicle.manufacturer + item.vehicle.model}</strong> ({item.vehicle.color}) <strong>- {item.vehicle.plate}</strong></span>
    </div>
  );
}

export default SectionInfoDriver;