import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";



const Product = () => {
    const [products, setproducts] = useState([])
    const [item , setItem]= useState("")
    
    useEffect(() => {






        axios({
            url: 'http://localhost:5000/products',
            method: "get",
            withCredentials: true
        })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setproducts(response.data.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }, [])


    
    return (

        <div>
            {(item !== "")?  
            <div id="item">
            <div className="item-i"><img className="item-img" src={item.productimage}  alt="" /></div>
          <p className="name"> {item.name}</p> 
           <p className="price"> {item.price}/-</p>
            <p className="description">{item.description}</p>
            <button ><a href="https://www.instagram.com/kids_wishh/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR1Y1Vv9nOT171wZgzaNOPYcrcuQAcJkgzUk4YimU_8gpn8qu-_vBJP1GwM" target="blank">for order click here</a></button>
            <button ><a href="./products">back</a></button>
        </div> :     <div className="card">
                {products.map((eachProduct => (
                    <div key={eachProduct._id} className="card-1" >
                        <a href="./pro1"><img className="productimg" width="120px" src={eachProduct.productimage} alt="" />
                       </a>
                        <h4>{eachProduct?.name}</h4>
                        <div className="description">{eachProduct?.description}</div>
                        <div className="price">{eachProduct?.price}/-</div>
                        <div>{eachProduct?.code}</div>
                          <button onClick={()=>{
                            axios.get(`http://localhost:5000/product/${eachProduct._id}` , {withCredentials: true})
                            .then(function (response) {
                              console.log(response, "found");
                            
                           setItem(response.data.data)
                            })
                            .catch(function (error) {
                              console.log(error);
                            });
                          }}>view</button>
                      

                    </div>
                    
                )))}
            </div>
 }
        
            
       
         

        </div>
    )
}

export default Product