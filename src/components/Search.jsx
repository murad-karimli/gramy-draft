import React from 'react';
import{BsFillHeartFill} from "react-icons/bs";
import{AiOutlineSearch} from "react-icons/ai";

function Search() {
  return (
    <div className=" hover:scale-105 transition-all duration-700 hover:bg-[#f9fefe] w-2/3 p-8 lg:absolute lg:-bottom-44 lg:right-56 bg-[#F9F9F9] z-10 mx-auto flex shadow-lg shadow-[#777] justify-between rounded-xl">
      <div className="">
      <span className="mx-4">9.5</span>
      <span className="mx-4">10-dan</span>
      <button className="border-solid border-[#666] rounded-xl border-[1px] p-2"> <BsFillHeartFill className="inline" size={20}/> Sevimli</button>
      </div>
      
     <form className='w-[36%]'>
      <AiOutlineSearch size={30} className="inline"/>
      <input className="bg-[#fff] w-[90%] border-solid border-[1px] border-[#999] rounded py-2 px-4" placeholder={`Axtarış`}/>
     </form>
    </div>
  )
}

export default Search