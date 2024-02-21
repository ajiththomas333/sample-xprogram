
import "./detail.css"
function Details({ product }) {
  


    return (
        <div className="detail">
            {
                product.map((obj,index) => {
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















