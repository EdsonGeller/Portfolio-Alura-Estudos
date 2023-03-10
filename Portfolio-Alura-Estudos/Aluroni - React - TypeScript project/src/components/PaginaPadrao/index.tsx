import style from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao(){
  return(
    <>

      <header className={style.header}>
        <div className={style.header__text}>
                 A casa do código e da massa
        </div>
      </header>

      <div className={stylesTema.container}>
        <Outlet/>
      </div>

    </>
  );
}