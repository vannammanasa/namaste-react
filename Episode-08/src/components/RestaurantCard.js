
import {CDN_URL} from "../utils/constants";

const Restaurantcard=(props)=>{    //props is an object which make all rest-cards dynamic 

  //console.log(props); 
const {resData} = props;
  const {name,cloudinaryImageId,cuisines,costForTwo,avgRating} = resData?.info; //optional chaining


  return (
    <div className ="res-card">
      <img className ="card-image" alt="res-logo" src={CDN_URL+ cloudinaryImageId} />  


      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}stars</h4>
    </div>
  )
}


export default Restaurantcard;
