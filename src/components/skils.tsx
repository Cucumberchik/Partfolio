

import { NextPage } from 'next';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react'


import ReactIcon from "@/icons/React"
import NextIcon from "@/icons/Next"
import TypescriptIcon from "@/icons/Typescript"
import SCSSIcon from "@/icons/SCSS"
import StyledIcon from "@/icons/StyledComponents"
import PnpmIcon from "@/icons/PNPM"
import ReduxIcon from "@/icons/PNPM"
import zustand from "@/icons/Zustand.png"
import CardSkilss from './cardSkilss';

interface SkilsIconType {
    title: string,
    description: string,
    image: ReactElement
}

const Skils:NextPage = ():ReactNode => {
    const IconSize = 30
    const skilsArray:SkilsIconType[] = [
        {
            title: "React.js",
            description: "React позволяет разрабатывать интерфейс пользователя с помощью отдельных компонентов, что упрощает поддержку и повторное использование кода.",
            image: <ReactIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Next.js",
            description: "Next.js позволяет рендерить страницы на сервере, что улучшает SEO и ускоряет загрузку страниц для пользователей. Это особенно полезно для сайтов с большим количеством контента.",
            image: <NextIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Typescript",
            description: "TypeScript позволяет обнаруживать ошибки на этапе компиляции, а не во время выполнения. Это помогает предотвратить многие распространенные ошибки и улучшает качество кода.",
            image: <TypescriptIcon width={IconSize} height={IconSize} />
        },
        {
            title: "SCSS",
            description: "SCSS (Sassy CSS) - это язык препроцессора CSS, который добавляет множество удобных функций и возможностей к стандартному CSS.",
            image: <SCSSIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Styled-Components",
            description: "Стили привязаны к компонентам, что делает их легко отслеживаемыми и понятными. Вам не нужно искать файлы CSS, чтобы узнать, какие стили применяются к данному компоненту.",
            image: <StyledIcon width={IconSize} height={IconSize} />
        },
        {
            title: "PNPM",
            description: "pnpm кэширует зависимости и использует их повторно, что сокращает время установки в будущем.",
            image: <PnpmIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Redux-Toolkit",
            description: "Redux Toolkit предлагает краткий и лаконичный синтаксис для создания срезов состояния, редюсеров и действий, что сокращает объем написанного кода и упрощает его понимание.",
            image: <ReduxIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Zustand",
            description: "Благодаря своей простоте и эффективной реализации, Zustand обеспечивает высокую производительность. Он избегает лишних перерендеров компонентов благодаря своему механизму обновления состояния.",
            image: <Image src={zustand} alt="zustand_icon" />
        }
    ]
  return (
    <section id='skils'>
        <div className="container">
            {skilsArray.map((el:SkilsIconType, idx:number)=>(
                <CardSkilss img={el.image} title={el.title} description={el.description} />
            ))}
        </div>
    </section>
  );
};

export default Skils;