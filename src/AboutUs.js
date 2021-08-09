import React, { Component } from 'react'
import Aouther from './Aouther';
import pic1 from './imgs/01.jpg'
import pic2 from './imgs/02.jpg'
import pic3 from './imgs/03.jpg'
const AboutUs = () => {

     const autherList=[
         {
             img: pic1,
             name:"Rama Khder",
             title:"Front End Developer", 
             description:"Senior FrontEnd Developer with high performance skills" 
            },
         {
             img: pic2,
             name:"David miner",
             title:"Web Developer",
             description:"Senior BackEnd Developer with advanced skills"
            },
            {
                img: pic3,
                name:"Elon docker",
                title:"Database Adminstration",
                description:"Database Adminstration with advanced skills"
               }
     ]
     const images=[
        { url: pic1 },
        { url: pic2 },
        { url: pic3 }  
    ];
        return (
            <div>{
                autherList.map((auther,id)=>{
                    return(
                        <Aouther key={id} auther={auther} />
                    )
                })
            }
            </div>
        ) 
};
export default AboutUs;
