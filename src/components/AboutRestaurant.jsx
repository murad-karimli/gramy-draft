import React from 'react'

function AboutRestaurant() {
  return (
    <aside className='p-24'>
    <h1 className='font-bold text-2xl'>Restoran məlumatları</h1>

    <h1 className='font-bold text-xl my-4'>Ünvan</h1>
    <span className='font-semibold my-2'>7 Khagani Street, Baku</span>
    <a className='text-[#00ffff] block my-2 font-semibold '>Xəritədə bax</a>

    <h1 className='font-bold text-xl my-4'>Açıq saatlar</h1>
    <span className='font-semibold my-2'>Bazar ertəsi-Bazar günü - 09.00 – 24.00</span>

    <h1 className='font-bold text-xl my-4'>Kateqoriyalar</h1>
    <span className='font-semibold my-2'>Azərbaycan fastfood kabab</span>
   </aside>
  )
}

export default AboutRestaurant