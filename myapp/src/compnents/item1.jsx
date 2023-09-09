import axios from "axios";
const Item =()=>{
const onView = ({id})=>{
    axios.get(`http://localhost:5000/product/${id}` , {withCredentials: true})
                .then(function (response) {
                  console.log(response, "found");
                

                })
                .catch(function (error) {
                  console.log(error);
                });
}
    return(
        <>
         
         helloo      
            
        </>
    )
}

export default Item