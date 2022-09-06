import React from 'react'

function MealModal() {
  return (
    <div className='h-96 hidden absolute bottom-2 bg-[#feff] left-4  w-[90%]'>
        <img className='rounded' src='https://imageproxy.wolt.com/menu/menu-images/5f22c21ce9e34a7168463571/1eb04e44-c707-11ec-8cf9-9a93740d83a6_baki_corek_toyuq.jpeg' alt="modal-pic"/>
        <content>
            <h1>Çörəhhh dönər</h1>
            <span>5 AZN</span>
            <p>Toyuq, turshu , kahi</p>
                <div className='flex justify-between'>
    
                    <div className=''>
                        <button className='p-2 bg-[#00ff] rounded-xl'>-</button>
                        <span>2</span>
                        <button className='p-2 bg-[#00ff] rounded-xl'>+</button>
                    </div>
                    <button className='bg-[#00ff] w-1/2 p-2 rounded-xl text-[#fff]'>Sifarishi elave et <span>total amount</span></button>
             </div>
        </content>

    </div>
  )
}

export default MealModal