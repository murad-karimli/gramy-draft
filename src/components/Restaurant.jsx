import React from 'react'
import Search from './Search';
import { ParallaxBanner } from 'react-scroll-parallax';

function Restaurant() {
  return (
    <section className=" w-full relative flex flex-col">
      <ParallaxBanner
      layers={[
        { image: 'https://imageproxy.wolt.com/menu/menu-images/5fe5a60e0f0388c7007b6b05/08e9edc4-d5b0-11ec-a5ca-4e6b0d82e776_______________________46_.jpeg?w=300', speed: -20 },
        {
          speed: -5,
          children: (
            <div className="absolute inset-0 sm:h-screen h-[450px] items-start p-12 justify-end sm:justify-center flex flex-col">
              <h1 className="font-bold sm:text-6xl text-4xl text-[#fff] hover:scale-110 transition-all duration-700">Tavada</h1>
              <p className="font-semobold sm:text-4xl text-2xl text-[#fff] hover:scale-110 transition-all duration-700">İndi sizə daha yaxın</p>
            </div>
          ),
        },
        { image: '/static/banner-foreground.png', speed: -10 },
      ]}
      className="aspect-[2/1]"
    />  
    <Search/>
  </section>
  )
}

export default Restaurant