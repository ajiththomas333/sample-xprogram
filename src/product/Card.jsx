
import "./card.css"
function Card({data}) {
  return (
    <div className="Cards">
      {
        data.map((obj ,index)=>{
          return(
          <div className="card" key={index}>
             <img src={obj.image} />
      <div className="card-content">
        <h2>{obj.title}</h2>
        <h4> price:{obj.price} Rs</h4>
      </div>

    </div>


          
        )})
      }
     

    
  
     
   
        
     
    </div>
   

 

    
  );
}

export default Card;