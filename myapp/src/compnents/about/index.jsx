import React from 'react';
import slide from "../assets/logo.jpg"
import { Card} from 'antd';
const { Meta } = Card;


const About = ()=>{
    return(
       
<div className="main-card">
        <Card className='card'
        hoverable
        style={{
          width: 200,
          height : 300
          
        }}
        cover={<img alt="example" src={slide} height={100} width={100}/>}
      >
       <p className='text'>OUR AIM IS TO SELL GOOD QUALITY OF TOYS AT AFFORDABLE PRICE</p>
      </Card>
      </div>
);

}

export default About