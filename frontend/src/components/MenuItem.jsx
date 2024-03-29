import React from 'react'

const MenuItem = ({title,description,price,imgUrl}) => {
  return (
        <div className='text-white border border-white-200 rounded-lg overflow-hidden'>
            <img src={imgUrl} alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer rounded-lg shadow-sm"
            />
            <div className='w-full p-4'>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                    {description}
                </p>
                <p className='text-sm md:text-lg font-bold mt-3'>R{price}</p>
            </div>

        </div>

  )
}

export default MenuItem
