import { useEffect } from "react";
import RestaurantMeal from "./components/RestaurantMeal";
import Aos from "aos";
import "aos/dist/aos.css"
import Categories from "./components/Categories";
import AboutRestaurant from "./components/AboutRestaurant";
import DeliveryHead from "./components/DeliveryHead";
import Restaurant from "./components/Restaurant";
import MealModal from "./components/MealModal";
function App() {
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
          <RestaurantMeal />
          <RestaurantMeal />
          <RestaurantMeal />
          <RestaurantMeal />
          <RestaurantMeal />
          <RestaurantMeal />
          <RestaurantMeal />
          <RestaurantMeal />
        </main>
        <AboutRestaurant/>
       </div>
      </content>
      
    </main>
    <MealModal/>
  </div>
   
  );
}

export default App;
