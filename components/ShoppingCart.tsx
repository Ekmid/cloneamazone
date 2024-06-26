"use client"
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/cartSlice';
import Image from 'next/image'
import React from 'react'
import Subtotal from './shared/Subtotal';

const ShoppingCart = ({ cart, totalPrice }: { cart: any, totalPrice: number }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="tablet:w-[70%] phone:w-[90%]">
            <div className="flex justify-between items-center border-b border-gray-300 py-5">

                <h1 className="font-bold text-2xl ">Shopping Cart</h1>
                <h1 className="font-medium">Price</h1>
            </div>
            {
                cart.map((product: any) => {
                    return (
                        <div key={product.id} className="py-4 flex justify-between border-b border-gray-200">
                            <div className="flex">
                                <div>
                                    <Image src={product.image} width={100} height={100} alt={product.title} />
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-medium phone:text-[10px] tablet:text-base'>{product.title}</h1>
                                    <p className='text-[#007600] font-bold my-1 phone:text-[10px] tablet:text-xs'>In Stock</p>
                                    <h1 onClick={() => {
                                        dispatch(removeFromCart(product.id))
                                    }} className='font-bold text-red-600 cursor-pointer phone:text-[10px] tablet:text-sm'>REMOVE</h1>
                                    <div className='flex phone:text-[10px] tablet:text-xl my-4 font-medium items-center justify-between w-fit bg-gray-200 rounded-md px-5 py-1'>
                                        <div
                                            onClick={() => {
                                                product.quantity > 1 && dispatch(decrementQuantity(product));
                                            }}
                                            className='cursor-pointer mr-4'>-</div>
                                        <div>{product.quantity}</div>
                                        <div
                                            onClick={() => {
                                                dispatch(incrementQuantity(product));
                                            }}
                                            className='cursor-pointer ml-4'>+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold tablet:text-2xl phone:text-[16px]'>{`$${product.price}`}</h1>
                                <p className='text-xs py-1'>Sale <span className='line-through'>$1000</span></p>
                            </div>
                        </div>
                    )
                })
            }
            <h1
                onClick={() => {
                    dispatch(clearAllCart());
                }}
                className='text-red-600 font-bold cursor-pointer'>CLEAR ALL</h1>
            <div className='phone:hidden tablet:inline'>
                <Subtotal left={false} length={cart.lenght} totalPrice={totalPrice} />
            </div>
        </div>
    )
}

export default ShoppingCart