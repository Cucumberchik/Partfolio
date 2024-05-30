import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react'

const CardSkilss:NextPage<{img: ReactElement, title: string, description: string}> = 
({img, title, description}):ReactNode => {
  return (
    <div className='card_skils'>
        <div className="image_card_skils">
          {img}
        </div>
        <div className="contant">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  );
};

export default CardSkilss;