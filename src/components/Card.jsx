import React from 'react'

const Card = ({ item }) => {
    const DownIcon = item.downIcon;
    const UpIcon = item.upIcon;
    return (
        <div className='flip-box w-[100%] h-[200px] perspective-1000 group rounded-[5px] overflow-hidden cursor-pointer'>
            <div className='flip-box-inner w-[100%] h-[100%] relative preserve-3d transition-all ease-linear duration-300 group-hover:rotate-y'>
                <div className='flip'>
                    <img src={item.image} alt="()" className='w-full h-full opacity-1 object-cover' />
                    <div className='absolute top-0 h-full text-white text-center w-full flex flex-col justify-end items-center pb-[1rem] bg-[rgba(0,0,0,0.5)]'>
                        <h5 className='text-xl font-bold capitalize tracking-wide font-Roboto-slab'>{item.title}</h5>
                        <button className='mt-[0.75rem] text-1xl'>
                            <DownIcon />
                        </button>
                    </div>
                </div>
                <div className='flip bg-[#87A844] rotate-y'>
                    <div className='text-center text-white h-full flex flex-col justify-center mt-[1rem] gap-2 items-center'>
                        <h2 className='font-bold text-xl font-Roboto-slab capitalize'>{item.title}</h2>
                        <p className='font-light text-[0.85rem] w-[80%] font-Mukta'>{item.description}</p>
                        <button className='mt-[2rem]'>
                            <UpIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
