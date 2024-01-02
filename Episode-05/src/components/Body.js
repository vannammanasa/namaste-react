import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body =()=>{

  const [listOfRestaurants,setListOfRestaurant]=useState(resList);
  console.log(listOfRestaurants);
  //console.log(setListOfRestaurant);

  return (
    <div className="body">
      <div className="search-filter">
        <button className="search-button" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
          setListOfRestaurant(filteredList);
        }}

        
          >Top Rated Restaurants </button>

      </div>
      <div className ="res-container">
       {
        listOfRestaurants.map((restaurant) =>
          <RestaurantCard key = {restaurant.info.id}resData = {restaurant} /> //mentioning key is crucial when we use map method & used "<Restauarant card ..../>" as a JSX element
        ) 
       }



      </div>
    </div>
  )
      }

      export default Body;