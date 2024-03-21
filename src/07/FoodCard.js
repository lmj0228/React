import bank from './img/bank.png';
import market from './img/market.png';
import busan from './img/busan.png';
import { useState } from 'react';

export default function FoodCard({fodj}) {

    const [isClick, setIsClick] = useState(false) ;

    const fimg = fodj['구분'] === "기초푸드뱅크" ? bank :
                 fodj['구분'] === "기초푸드마켓" ? market : busan ;

    const handleIsClick = () => {
        setIsClick(!isClick) ;
    }

    return (
        <div className='w-11/12 flex justify-center items-center
                        p-1 border'
                onClick={handleIsClick}>
            <div className='w-1/6 max-w-x1 flex justify-center items-center'>
                <img src={fimg} alt={bank} className='w-full inline-flex' />
            </div>
            <div className='w-5/6' p-3 mx-3>
                <h1 className='text-2xl font-bold text-slate-700'>
                    {fodj["사업장명"]}
                </h1>
                <h2 className='text-xl font-bold text-slate-500'>
                    {fodj["운영주체명"]}
                </h2>
                <h2 className='text-xl font-bold text-slate-400'>
                    {fodj["사업장 소재지"]}
                </h2>
                <div className='w-full h-8 text-sm
                            bg-slate-600 text-white mt-5 p-2'>
                    { isClick && `Tel : ${fodj["연락처(대표번호)"]} , Fax : ${fodj["팩스번호"]}`}
                </div>
            </div>
        </div>
    )
}
