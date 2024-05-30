import { NextPage } from 'next';
import { ReactNode } from 'react'

const ReduxIcon:NextPage<{width:number, height: number}> = ({width = 20, height = 20}):ReactNode => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5852 10.5246C11.0798 10.4734 11.4551 10.0469 11.4381 9.53519C11.421 9.02345 10.9945 8.61406 10.4828 8.61406H10.4487C9.91989 8.63111 9.5105 9.07462 9.52756 9.60342C9.54461 9.85929 9.64696 10.081 9.80048 10.2346C9.22051 11.3775 8.3335 12.2133 7.00297 12.9127C6.0989 13.3903 5.16071 13.5609 4.22252 13.4415C3.45491 13.3391 2.85788 12.998 2.4826 12.435C1.93675 11.5992 1.88557 10.6951 2.34614 9.79106C2.67024 9.14285 3.18198 8.66523 3.50608 8.42642C3.43785 8.20466 3.3355 7.82939 3.28433 7.55646C0.810917 9.34755 1.06679 11.7698 1.81734 12.9127C2.38025 13.7656 3.52314 14.2944 4.78543 14.2944C5.12659 14.2944 5.46775 14.2603 5.80891 14.175C7.99234 13.7485 9.64696 12.4521 10.5852 10.5246Z" fill="#FDD835" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5874 8.40936C12.2909 6.8912 10.3804 6.05536 8.19702 6.05536H7.9241C7.77057 5.74831 7.44647 5.54362 7.08825 5.54362H7.05414C6.52534 5.56067 6.11595 6.00418 6.13301 6.53298C6.15006 7.04472 6.57651 7.45411 7.08825 7.45411H7.12237C7.49765 7.43705 7.82175 7.19824 7.95821 6.87414H8.26526C9.56166 6.87414 10.7898 7.24942 11.8986 7.98291C12.7515 8.54582 13.3656 9.27932 13.7068 10.1663C13.9967 10.8828 13.9797 11.5821 13.6726 12.1792C13.195 13.0833 12.3933 13.5779 11.3357 13.5779C10.6534 13.5779 10.0052 13.3732 9.66401 13.2197C9.47637 13.3903 9.13521 13.6632 8.8964 13.8338C9.6299 14.175 10.3804 14.3626 11.0969 14.3626C12.7345 14.3626 13.9456 13.4585 14.4061 12.5545C14.9008 11.5651 14.8667 9.85929 13.5874 8.40936Z" fill="#FDD835" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.92189 10.8145C4.93895 11.3263 5.3654 11.7357 5.87714 11.7357H5.91126C6.44005 11.7186 6.84945 11.2751 6.83239 10.7463C6.81533 10.2346 6.38888 9.82517 5.87714 9.82517H5.84302C5.80891 9.82517 5.75773 9.82517 5.72362 9.84223C5.02424 8.68229 4.73425 7.42 4.8366 6.05536C4.90483 5.03188 5.24599 4.14486 5.84302 3.41137C6.33771 2.78022 7.29295 2.47317 7.94116 2.45612C9.74931 2.422 10.5169 4.67366 10.5681 5.57773C10.7898 5.62891 11.1651 5.74831 11.421 5.8336C11.2163 3.07021 9.51049 1.63733 7.87293 1.63733C6.33771 1.63733 4.92189 2.7461 4.35898 4.38367C3.57431 6.56709 4.08605 8.66523 5.0413 10.3199C4.95601 10.4393 4.90483 10.6269 4.92189 10.8145Z" fill="#FDD835" />
    </svg>
  );
};

export default ReduxIcon;



