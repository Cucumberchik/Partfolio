import { NextPage } from 'next';
import { ReactNode } from 'react'

const Next:NextPage<{width:number, height: number}> = ({width = 20, height = 20}):ReactNode => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_2934)">
            <path d="M12.075 1.10962C6.78313 -2.0019 0.0588916 1.79843 0.000383344 7.93381C-0.05675 13.9249 6.28359 17.7946 11.5635 15.1577L5.79876 6.67613L5.79876 11.926C5.79876 12.5077 4.68567 12.5077 4.68567 11.926V4.88815C4.68567 4.4264 5.54339 4.38851 5.78645 4.78989L12.3572 14.7054C17.2931 11.5261 17.2265 4.13864 12.075 1.10962ZM11.3326 11.0452L10.216 9.33969V4.67057C10.216 4.23518 11.3326 4.23518 11.3326 4.67057V11.0452Z" fill="#78909C" />
        </g>
        <defs>
            <clipPath id="clip0_1_2934">
            <rect width={width} height={height} fill="white" />
            </clipPath>
        </defs>
    </svg>
  );
};

export default Next;