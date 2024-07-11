
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{
  const [resInfo, setResInfo] = useState(null); // to show the data from api

  const {resId} = useParams(); //extracting resId from useParams hook(which is an object)



  useEffect (() =>{
    fetchMenu();
  },[]);


  const fetchMenu = async()=>{
    const data = await fetch(MENU_API + resId);


    const json = await data.json();
    //console.log(resInfo)
    setResInfo(json.data);
  };
  


 if(resInfo === null) return  <Shimmer/>;


 
const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info;
 
   const cards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;


console.log(cards);

 let itemCards;
 if (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
   for (let card of resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards) {
     if (card?.card?.card?.itemCards) {
       itemCards = card?.card?.card?.itemCards;
       break;
     }
   }
 }
   
// console.log(itemCards);
 //console.log(name);

 return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(',')}</p>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}*</h2>

      <ul>
        {itemCards?.map((item)=>
            <li key = {item.card.info.id}>
              {item.card.info.name} - {"Rs."} 
              {item.card.info.defaultPrice/100 || item.card.info.price/100}
            </li>
        )}
      
       

      </ul>
    </div>
  );
};

export default RestaurantMenu;



/*import { useEffect } from "react";

const RestaurantMenu = ()=>{
  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER");
  };
//    const { name, costForTwoMessage, cuisines } = resInfo?.data.cards[2]?.card?.card?.info;

  return(
    <div class="menu">
      <h1>Name of the restaurant</h1>
      <h2>Location</h2>
      <h3>Menu</h3>
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
      </ul>

    </div>
  )
}

export default RestaurantMenu;
*/
