import style from './style.module.scss';

const Timer = () => {
  return (
    <div className={style.timer}>
      <h2>12:20h - <span>13:26h</span></h2>
      <span>Valor a ser cobrado: <span className="font-bold">R$3,00</span></span>
    </div>
  );
}

export default Timer;