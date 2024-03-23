"use client"
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr';
import { fetcher } from '@/app/_libs';
import { IProduct } from '@/app/_types';
import HomeContainer from './ProductHomeStyles';
import { useEffect } from 'react';
import sendViewEvent from '@/app/_libs/personalize/sendViewEvent';
import { engage } from '../../pages/api/engage';

export default function ProductPage() {
    const { data , error, isLoading } = useSWR<any>(
        `/api/products`,
        fetcher
      );

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;

  return (
    <HomeContainer className='w-full'>
        <ul className='flex flex-wrap mt-4'>
            {
                data && data.result.products.map((product: IProduct) => {
                    return (
                        <li key={product.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
                            <div className="my-2 bg-white overflow-hidden relative sm:h-auto md:h-[350px]  border-gray-500/20 border-[1px]">
                                    <Link href={`/product/${product.id}`}><Image className="w-full block h-[230px] sm:h-auo border-[1px] border-gray-300" src={product.thumbnail} alt=""  width={200} height={120} /></Link>
                                    <div className="p-4">
                                        <h2 className="capitalize text-xl sm:text-[14px] md:text-[16px] font-bold"><Link href={`/product/${product.id}`}>{product.title}</Link></h2>
                                    </div>
                                    <div className="text-[14px] font-bold p-4">Price: {product.price}</div>
                            </div>
                        </li>
                    )
                })
               
            }
        </ul>
    </HomeContainer>
  )
}
