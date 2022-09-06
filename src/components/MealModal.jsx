import React, { useEffect } from 'react';
import {AiOutlineClose} from "react-icons/ai"
import {useState} from "react"
import Modal from 'react-modal';
const customStyles = {
  content: {
    width:"60%",
    height:"500px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));
function MealModal() {
 
  let subtitle;
  const [modalIsOpen, setIsOpen] =useState(false);
 
  

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#555';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
    
   
      <h2 className='text-center text-3xl font-semibold' ref={(_subtitle) => (subtitle = _subtitle)}>Çörəhh dönərr</h2>
      <button onClick={closeModal} className="right-4 absolute"><AiOutlineClose size={30}/></button>
     <div id='mymodal' className='h-96 absolute  bg-[#feff]  w-[90%]'>
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
    
  </div>
  )
}

export default MealModal
