import React from 'react'
import Search from './Search'

function Restaurant() {
  return (
    <section className=" relative flex flex-col">
    <div className="h-screen items-start p-8 justify-center flex flex-col bg-cover bg-center " style={{backgroundImage:`url("https://imageproxy.wolt.com/menu/menu-images/5fe5a60e0f0388c7007b6b05/08e9edc4-d5b0-11ec-a5ca-4e6b0d82e776_______________________46_.jpeg?w=300")`}}>
      <h1 className="font-bold text-6xl text-[#fff] hover:scale-110 transition-all duration-700">Tavada</h1>
      <p className="font-semobold text-4xl text-[#fff] hover:scale-110 transition-all duration-700">İndi sizə daha yaxın</p>
    </div>
    <Search/>
  </section>
  )
}

export default Restaurant