import { NextPage } from 'next';
import { ReactNode } from 'react'
import style from "./app.module.scss"
import Image from 'next/image';
import SwitchButtons from '@/components/switch';


const Home:NextPage = ():ReactNode => {
  return (
   <main className={style.main}>
    <div className="container">
      <div className={style.frame_title}>
        <div className={style.fram_title_item}>
          <span>Frontend developer </span>
          <a href="https://github.com/Cucumberchik" target='_blank'>Cucumberchik</a>
        </div>
      </div>
      <div className={style.wellcome_title}>
        <h1>
          Премиальная разработка IT-решений
        </h1>
        <p>
          Добро пожаловать в <span>Техническую лабораторию</span> веб-разработок
          <br />
          Я занимаемаюсь комплексной разработкой IT-решений для Ваших проектов.
        </p>
      </div>
      <div className={style.bacdrop}>
        <svg className={style.liner} viewBox="0 0 1287 653" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M490.921 543.826H801.869M0.471162 15.671L0.471133 652.303M41.9309 15.671L41.9309 652.303M83.3906 15.671L83.3906 652.303M124.85 15.671L124.85 652.303M166.31 15.671L166.31 652.303M207.77 15.671L207.77 652.303M249.23 15.671L249.23 652.303M290.689 15.671L290.689 652.303M332.149 15.671L332.149 652.303M0 626.962H1285.25M373.609 15.671L373.609 652.303M0 587.839H1285.25M415.069 15.671L415.069 652.303M0 548.717H1285.25M456.528 15.671L456.528 652.303M0 509.594H1285.25M497.988 15.671L497.988 652.303M0 470.471H1285.25M539.448 15.671L539.448 652.303M0 431.349H1285.25M580.908 15.671L580.907 652.303M0 392.226H1285.25M622.367 15.671L622.367 652.303M0 353.104H1285.25M663.827 15.671L663.827 652.303M0 313.981H1285.25M705.287 15.671L705.287 652.303M0 274.858H1285.25M746.747 15.671L746.746 652.303M0 235.736H1285.25M788.206 15.671L788.206 652.303M0 196.613H1285.25M829.666 15.671L829.666 652.303M0 157.49H1285.25M871.126 15.671L871.126 652.303M0 118.368H1285.25M912.585 15.671L912.585 652.303M0 79.2452H1285.25M954.045 15.671L954.045 652.303M0 40.1226H1285.25M995.505 15.671V652.303M0 1L1285.25 1M1036.96 15.671V652.303M1078.42 15.671V652.303M1119.88 15.671V652.303M1161.34 15.671V652.303M1202.8 15.671V652.303M1244.26 15.671V652.303M1285.72 15.671V652.303" stroke="url(#paint0_radial_1_421)" strokeWidth="0.888544" />
          <defs>
            <radialGradient id="paint0_radial_1_421" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(642.862 288) rotate(90) scale(364.303 719.163)">
              <stop stopColor="white" stopOpacity="0.12" />
              <stop offset="0.6" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className={style.liner_light_left_0}></div>
        <div className={style.liner_light_left_1}></div>
        <div className={style.liner_light_left_2}></div>
        <div className={style.liner_light_right_0}></div>
        <div className={style.liner_light_right_1}></div>
        <div className={style.liner_light_right_2}></div>
      </div>
      <div className="switch_elem">
        <SwitchButtons />
      </div>
    </div>

   </main>
  );
};

export default Home;