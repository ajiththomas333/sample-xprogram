
import "./detail.css"
function Details({set}) {
  


    return (
        <div className="detail">
            {
                set.map((obj,index) => {
                    return(
                        <div className="product-detail"key={index}>
                        <img src={obj.image} />
                        <h2>{obj.title}</h2>
                        <p>yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</p>
                        <p>${obj.price}</p>

                    </div>

                    )

                    



                })
            }









        </div>
    );
}

export default Details;















