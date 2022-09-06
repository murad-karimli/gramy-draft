import React from 'react'

function Restaurant() {
  return (
    <section className="relative">
    <img className="w-full" src="https://imageproxy.wolt.com/menu/menu-images/5fe5a60e0f0388c7007b6b05/08e9edc4-d5b0-11ec-a5ca-4e6b0d82e776_______________________46_.jpeg?w=300" alt="tava"/>
    <div className="absolute bottom-44  left-40">
      <h1 className="font-bold text-6xl text-[#fff] hover:scale-110 transition-all duration-700">Tavada</h1>
      <p className="font-semobold text-4xl text-[#fff] hover:scale-110 transition-all duration-700">İndi sizə daha yaxın</p>
    </div>
  </section>
  )
}

export default Restaurant