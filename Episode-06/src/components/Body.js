import RestaurantCard  from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{

  const [listOfRestaurants,setListOfRestaurant]=useState([]);

  const [searchInputText,setSearchInputText] = useState("");

  //console.log("body rendered");

  const [filteredRestaurant,setFilteredRestaurant] = useState([]); //creating another state variable & binding it to the inputbox

  useEffect(() =>{
      fetchData();
  },[]);

  const fetchData = async()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4849003&lng=78.4879809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  console.log(json);

//optional chaining
 setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  //console.log(listOfRestaurants);
  //console.log(setListOfRestaurant);

  return listOfRestaurants.length === 0 ?(
     <Shimmer />
     ): (<div className="body">
      <div className="search-filter">
        <div className="search">
            <input type="text" className="search-box" value={searchInputText}
                onChange={(e) =>{setSearchInputText(e.target.value);  //to update the search text
                }}
            />
        
        <button className="search-button" onClick={()=>{

          const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchInputText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);
          console.log(searchInputText);

        }}
        >Search </button>

        </div>
        <button className="filter-btn" onClick={() =>{
          const filteredList = listOfRestaurants.filter((res) =>res.info.averageRating>4);
      setListOfRestaurant(filteredList);
    }}
          >Top Rated Restaurants 
        </button>

      </div>
      <div className ="res-container">
       {
        filteredRestaurant.map((restaurant) =>(
          <RestaurantCard key = {restaurant.info.id}resData = {restaurant} /> //mentioning key is crucial when we use map method & used "<Restauarant card ..../>" as a JSX element
        ))}



      </div>
    </div>
  )
      };
    

      export default Body;