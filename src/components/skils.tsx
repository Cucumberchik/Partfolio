

import { NextPage } from 'next';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react'


import ReactIcon from "@/icons/React"
import NextIcon from "@/icons/Next"
import SCSSIcon from "@/icons/SCSS"
import PnpmIcon from "@/icons/PNPM"
import zustand from "@/icons/Zustand.png"
import CardSkilss from './cardSkilss';

interface SkilsIconType {
    title: string,
    description: string,
    image: ReactElement
}

const Skils:NextPage = ():ReactNode => {
    const IconSize = 120
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
            image:  <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.0398064 0.0400391V97.9601H97.9598V0.0400391H0.0398064ZM74.4446 47.6008V47.6023C75.3836 47.6052 76.4507 47.6535 77.2533 47.7405C80.5219 48.0942 83.0673 49.5043 85.2329 52.1604C86.3113 53.4835 86.6802 54.0625 86.6016 54.3101C86.551 54.4698 85.811 54.9998 83.4586 56.5615C81.1477 58.0956 80.4031 58.5551 80.2303 58.5551C80.055 58.5551 79.6899 58.1793 79.1635 57.4577C78.1496 56.0683 77.1145 55.4342 75.5143 55.2227C73.7934 54.9948 72.2498 55.5372 71.4938 56.636C70.8476 57.5747 70.75 59.0854 71.2636 60.183C71.8586 61.4544 72.9357 62.1572 77.0635 63.9673C81.8241 66.0547 84.2366 67.4835 85.9936 69.2566C87.8857 71.1662 88.8443 73.371 89.1388 76.4895C89.2826 78.0095 89.1069 79.8111 88.6719 81.2758C87.6052 84.8665 84.7266 87.4957 80.5071 88.7331C79.3408 89.0751 78.2555 89.2794 77.1819 89.358C75.5432 89.4786 73.1972 89.4121 71.7853 89.2066C68.2131 88.6863 64.1807 86.6076 62.1699 84.2506C61.1829 83.0936 59.9227 81.1896 59.9227 80.8546C59.9227 80.6929 60.0028 80.6012 60.3202 80.3994C61.2613 79.8015 66.6548 76.7183 66.7594 76.7183C66.8227 76.7183 67.1044 77.0504 67.3852 77.4561C68.0215 78.3748 69.586 79.9538 70.3814 80.4806C71.0312 80.9108 71.862 81.2564 72.8483 81.5057C73.4133 81.6466 73.7124 81.6717 74.945 81.6717C76.2044 81.6712 76.4629 81.65 77.0263 81.4987C78.5166 81.0976 79.68 80.2677 80.1729 79.2538C80.389 78.8158 80.3933 78.7611 80.3933 77.6985V76.597L80.1284 76.0715C79.4868 74.7979 78.1043 73.9241 73.7336 72.0309C71.7259 71.1612 69.267 69.935 68.307 69.3249C66.1162 67.9326 64.5978 66.341 63.6013 64.3926C62.6101 62.4551 62.4623 61.7339 62.4599 58.8206C62.4574 56.54 62.4537 56.568 62.9258 55.1123C63.3542 53.7914 64.2312 52.3158 65.1993 51.287C67.1315 49.233 69.9544 47.913 72.9767 47.6505C73.3633 47.6139 73.881 47.5996 74.4444 47.6013L74.4446 47.6008ZM48.4382 48.0513H48.4392C54.2599 48.0543 57.5966 48.0744 57.6501 48.108C57.751 48.1705 57.7636 48.677 57.7636 51.9101V55.64L51.9553 55.6611L46.1471 55.6822V72.1733C46.1471 81.2436 46.1287 88.7184 46.1035 88.7844C46.0624 88.8954 45.6157 88.9039 41.8365 88.9039H37.6154L37.5718 88.7333C37.5436 88.6397 37.5231 81.1647 37.5226 72.1222L37.5212 55.6812L31.7129 55.6606L25.9047 55.6395V51.9538C25.9047 49.0306 25.9249 48.2477 26.0027 48.17C26.0826 48.0876 29.0468 48.0663 41.8191 48.0537C44.2818 48.0513 46.4978 48.0501 48.4382 48.0513Z" fill="#0288D1" />
                    </svg>
        },
        {
            title: "SCSS",
            description: "SCSS (Sassy CSS) - это язык препроцессора CSS, который добавляет множество удобных функций и возможностей к стандартному CSS.",
            image: <SCSSIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Styled-Components",
            description: "Стили привязаны к компонентам, что делает их легко отслеживаемыми и понятными. Вам не нужно искать файлы CSS, чтобы узнать, какие стили применяются к данному компоненту.",
            image: <img src="https://emojisup.org/images/emoji/apple/ios-15-4/nail-polish-medium-skin-tone@2x.png" alt='styled-components_icon' />
        },
        {
            title: "PNPM",
            description: "pnpm кэширует зависимости и использует их повторно, что сокращает время установки в будущем.",
            image: <PnpmIcon width={IconSize} height={IconSize} />
        },
        {
            title: "Redux-Toolkit",
            description: "Redux Toolkit предлагает краткий и лаконичный синтаксис для создания срезов состояния, редюсеров и действий, что сокращает объем написанного кода и упрощает его понимание.",
            image: <svg width={IconSize} height={IconSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5852 10.5246C11.0798 10.4734 11.4551 10.0469 11.4381 9.53519C11.421 9.02345 10.9945 8.61406 10.4828 8.61406H10.4487C9.91989 8.63111 9.5105 9.07462 9.52756 9.60342C9.54461 9.85929 9.64696 10.081 9.80048 10.2346C9.22051 11.3775 8.3335 12.2133 7.00297 12.9127C6.0989 13.3903 5.16071 13.5609 4.22252 13.4415C3.45491 13.3391 2.85788 12.998 2.4826 12.435C1.93675 11.5992 1.88557 10.6951 2.34614 9.79106C2.67024 9.14285 3.18198 8.66523 3.50608 8.42642C3.43785 8.20466 3.3355 7.82939 3.28433 7.55646C0.810917 9.34755 1.06679 11.7698 1.81734 12.9127C2.38025 13.7656 3.52314 14.2944 4.78543 14.2944C5.12659 14.2944 5.46775 14.2603 5.80891 14.175C7.99234 13.7485 9.64696 12.4521 10.5852 10.5246Z" fill="#BA8FFF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5874 8.40936C12.2909 6.8912 10.3804 6.05536 8.19702 6.05536H7.9241C7.77057 5.74831 7.44647 5.54362 7.08825 5.54362H7.05414C6.52534 5.56067 6.11595 6.00418 6.13301 6.53298C6.15006 7.04472 6.57651 7.45411 7.08825 7.45411H7.12237C7.49765 7.43705 7.82175 7.19824 7.95821 6.87414H8.26526C9.56166 6.87414 10.7898 7.24942 11.8986 7.98291C12.7515 8.54582 13.3656 9.27932 13.7068 10.1663C13.9967 10.8828 13.9797 11.5821 13.6726 12.1792C13.195 13.0833 12.3933 13.5779 11.3357 13.5779C10.6534 13.5779 10.0052 13.3732 9.66401 13.2197C9.47637 13.3903 9.13521 13.6632 8.8964 13.8338C9.6299 14.175 10.3804 14.3626 11.0969 14.3626C12.7345 14.3626 13.9456 13.4585 14.4061 12.5545C14.9008 11.5651 14.8667 9.85929 13.5874 8.40936Z" fill="#BA8FFF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.92189 10.8145C4.93895 11.3263 5.3654 11.7357 5.87714 11.7357H5.91126C6.44005 11.7186 6.84945 11.2751 6.83239 10.7463C6.81533 10.2346 6.38888 9.82517 5.87714 9.82517H5.84302C5.80891 9.82517 5.75773 9.82517 5.72362 9.84223C5.02424 8.68229 4.73425 7.42 4.8366 6.05536C4.90483 5.03188 5.24599 4.14486 5.84302 3.41137C6.33771 2.78022 7.29295 2.47317 7.94116 2.45612C9.74931 2.422 10.5169 4.67366 10.5681 5.57773C10.7898 5.62891 11.1651 5.74831 11.421 5.8336C11.2163 3.07021 9.51049 1.63733 7.87293 1.63733C6.33771 1.63733 4.92189 2.7461 4.35898 4.38367C3.57431 6.56709 4.08605 8.66523 5.0413 10.3199C4.95601 10.4393 4.90483 10.6269 4.92189 10.8145Z" fill="#BA8FFF" />
                    </svg>
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