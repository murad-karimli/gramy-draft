import RestaurantMeal from "./components/RestaurantMeal";
import Categories from "./components/Categories";
import AboutRestaurant from "./components/AboutRestaurant";
import DeliveryHead from "./components/DeliveryHead";
import Restaurant from "./components/Restaurant";
import Search from "./components/Search";
function App() {
  return (
  <div>
   <DeliveryHead/>
   <Restaurant/>
    <main className="">
      <Search/>
      <content className="flex lg:flex-row flex-col justify-between my-24">
      <Categories/>
       <div className="flex justify-between lg:flex-row  flex-col w-2/3 justify-center items-center">
       <main className="flex flex-col lg:w-2/3 w-full">
          <RestaurantMeal/>
          <RestaurantMeal/>
          <RestaurantMeal/>
          <RestaurantMeal/>
        </main>
        <AboutRestaurant/>
       </div>
      </content>
    </main>
  </div>
   
  );
}

export default App;
