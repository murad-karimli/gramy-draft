import React from 'react'

function RestaurantMeal() {
  return (
    <div className=" hover:scale-105 transition-all w-[95%] lg:w-[80%] duration-700 w-full flex justify-between m-4 p-4 bg-[#fee] hover:bg-[#fef] rounded-2xl shadow-lg shadow-[#777]">
          <div className="px-2 " >
          <h1 className="text-2xl font-bold my-4">Name</h1>
          <span className="block text-md font-semibold  my-4">ingridients</span>
          <span className="text-xl font-semibold text-[#00ffff] my-4 ">5 AZN</span>
          </div>
          <img className="inline-block rounded-xl" src="https://imageproxy.wolt.com/menu/menu-images/5fe5a60e0f0388c7007b6b05/08e9edc4-d5b0-11ec-a5ca-4e6b0d82e776_______________________46_.jpeg?w=300" alt="menu"/>
    </div>
  )
}

export default RestaurantMeal