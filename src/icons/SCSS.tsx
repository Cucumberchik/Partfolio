import { NextPage } from 'next';
import { ReactNode } from 'react'

const SCSS:NextPage<{width:number, height: number}> = ({width = 20, height = 20}):ReactNode => {
  return (
    <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
         <path d="M13.926 2.713C13.5 1.068 10.709 0.527004 8.07 1.444C6.42268 1.98426 4.89654 2.84058 3.577 3.965C2.124 5.295 1.892 6.452 1.987 6.936C2.325 8.642 4.715 9.757 5.7 10.585C5.41 10.724 3.29 11.774 2.793 12.848C2.68401 13.0129 2.60993 13.1984 2.57532 13.3931C2.5407 13.5877 2.54628 13.7874 2.59171 13.9798C2.63714 14.1722 2.72146 14.3533 2.83949 14.5119C2.95751 14.6705 3.10674 14.8032 3.278 14.902C3.87902 15.0452 4.50954 14.9998 5.08387 14.772C5.65819 14.5443 6.14845 14.1452 6.488 13.629C6.76232 13.2155 6.93441 12.7427 6.99005 12.2496C7.04568 11.7565 6.98328 11.2572 6.808 10.793C7.28167 10.6756 7.77318 10.6481 8.257 10.712C9.918 10.902 10.244 11.912 10.181 12.341C10.1509 12.4932 10.0883 12.6371 9.99731 12.7628C9.90633 12.8885 9.78921 12.9929 9.654 13.069C9.538 13.14 9.502 13.164 9.512 13.216C9.526 13.292 9.58 13.289 9.679 13.273C9.92548 13.1977 10.1434 13.0496 10.304 12.848C10.4647 12.6465 10.5605 12.4011 10.579 12.144C10.619 11.149 9.644 10.036 7.918 10.065C7.41678 10.0514 6.91665 10.1189 6.437 10.265L6.364 10.186C5.3 9.073 3.326 8.285 3.41 6.788C3.44 6.244 3.634 4.811 7.2 3.073C10.121 1.649 12.46 2.041 12.864 2.909C13.441 4.15 11.614 6.456 8.58 6.788C8.24537 6.85509 7.90004 6.84729 7.56878 6.76516C7.23752 6.68304 6.92854 6.52863 6.664 6.313C6.505 6.141 6.481 6.133 6.421 6.166C6.321 6.219 6.386 6.366 6.421 6.461C6.53907 6.66762 6.69717 6.8486 6.88605 6.99335C7.07493 7.1381 7.29079 7.24371 7.521 7.304C8.71352 7.55748 9.95518 7.43737 11.077 6.96C12.912 6.265 14.348 4.33 13.926 2.713ZM6.106 11.095C6.24018 11.5476 6.23321 12.0304 6.086 12.479C6.07 12.5257 6.05266 12.572 6.034 12.618C6.01533 12.664 5.995 12.709 5.973 12.753C5.85893 12.9814 5.71167 13.1917 5.536 13.377C5.34698 13.6248 5.09222 13.8145 4.80071 13.9246C4.50919 14.0348 4.19262 14.0609 3.887 14C3.531 13.8 3.709 12.97 4.347 12.311C4.83887 11.8353 5.40367 11.4413 6.02 11.144L6.106 11.095Z" fill="#F03D70" />
    </svg>
  );
};

export default SCSS;