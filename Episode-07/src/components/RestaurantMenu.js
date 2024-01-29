
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestauarantMenu = () =>{
  const [resInfo, setResInfo] = useState(null);

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


 //return(resInfo === null)? <Shimmer/> :
 const {name,Cuisines,avgRating} = resInfo?.cards[0]?.card?.card?.info ;

 //const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ;


 let itemCards;
 if (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
   for (let card of resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards) {
     if (card?.card?.card?.itemCards) {
       itemCards = card?.card?.card?.itemCards;
       break;
     }
   }
 }
 console.log(itemCards);
 //console.log(name);

 return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{Cuisines}</p>
      <h2>{avgRating}</h2>
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

export default RestauarantMenu;