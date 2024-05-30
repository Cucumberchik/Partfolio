import { NextPage } from 'next';
import { ReactNode } from 'react'

const PNPM:NextPage<{width:number, height: number}> = ({width = 20, height = 20}):ReactNode => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4008 1.6H14.4008V5.6H10.4008V1.6ZM5.99998 1.6H9.99998V5.6H5.99998V1.6ZM1.59998 1.6H5.59998V5.6H1.59998V1.6ZM10.4008 6H14.4008V10H10.4008V6Z" fill="#F9AD00" />
        <path d="M5.99998 6H9.99998V10H5.99998V6ZM5.99998 10.4H9.99998V14.4H5.99998V10.4ZM10.4008 10.4H14.4008V14.4H10.4008V10.4ZM1.59998 10.4H5.59998V14.4H1.59998V10.4Z" fill="#4E4E4E" />
    </svg>
  );
};

export default PNPM;