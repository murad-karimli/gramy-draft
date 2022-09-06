
import React, { useEffect } from 'react';
import {useState} from "react"
import Modal from 'react-modal';
import RestaurantMeal from "./components/RestaurantMeal";
import Aos from "aos";
import "aos/dist/aos.css"
import Categories from "./components/Categories";
import AboutRestaurant from "./components/AboutRestaurant";
import DeliveryHead from "./components/DeliveryHead";
import Restaurant from "./components/Restaurant";
import MealModal from "./components/MealModal"; 
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
function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] =useState(false);
 
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#555';
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(()=>{Aos.init({duration:2200})},[])
  return (
  <div className="relative">
    <div data-aos="fade-up">
    <DeliveryHead />
    <Restaurant/>
    </div>
 
    <main  className="p-4">
    
      <content data-aos="fade-right" className="flex lg:flex-row flex-col   justify-between my-24">
      <Categories/>
       <div ata-aos="fade-right"  className="flex justify-between lg:flex-row  flex-col w-[80%] justify-center items-start">
       <main className="flex flex-col md:w-[80%]  w-full">
       <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
          </Modal>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
          <RestaurantMeal onClick={openModal}/>
        </main>
        <AboutRestaurant/>
       </div>
      </content>
      
    </main>
    
  </div>
   
  );
}

export default App;
