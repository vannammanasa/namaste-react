import React from "react";
//Example of getting live data from api
class Userclass extends React.Component{
  constructor(props){
    super(props);
    //console.log(props);

    this.state ={
      userInfo:{
        name:"dummy",
        location:"default"
      }
    };
  }
    async componentDidMount(){
        //api call

        const data = await fetch("https://api.github.com/users/vannammanasa");
        const json = await data.json();
        console.log(json);

        this.setState({
          userInfo:json,
        })//updating sestate
  }


  //render - returns some piece of jsx
  render(){
    const {name,location,bio,avatar_url}=this.state.userInfo;
    //debugger;
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
      <img src={avatar_url} />
        <h2>Location:{location}</h2>
        <h3>Bio:{bio}</h3>
</div>
        /*<button onClick={()=>{
          this.setState({
            count: this.state.count+1,
            count2:this.state.count+2,
          })
          //never directly update statevariable

        }}>INCREMENT</button>
        */
      
    )
  }

}
export default Userclass;


