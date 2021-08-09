import React, { useState } from 'react'
import ImageDetails from './ImageDetails';
//import pic1 from './imgs/1.jpeg'


const Home = ( {data} ) => {

    const [Img, setImg] = useState({});

    // const images=[
    //     {title:"first",src: pic1, des:"Floral Frame Template With Blue Flowers"},
    //     {title:"second",src:pic1 , des:"Floral Frame Template With Blue Flowers"},
    //     {title:"first",src:pic1 , des:"Floral Frame Template With Blue Flowers"},
    //     {title:"first",src:pic1 , des:"Floral Frame Template With Blue Flowers"},
       
    // ]
    const onSelectImg=(item)=>{
       
        setImg(item);
    }

    const renderedList = data.map((item,id) =>{
        return (
       <div className="ImageCard" key={id}>
           <img className="imageGride" alt={item.des} src={item.src} 
           onClick={()=>onSelectImg(item)}/>
           <span className="ImgTitleSty">{item.title}</span>
       </div>
        )
    })
        return (
            
            <div className={Img.src ? "imageViewer" :"container"}>
                <div className="imagesList">{renderedList} </div>
                <div className="big-container"> { Img.src && <ImageDetails img={Img}/> } </div>
            </div>
        )
    }
    export default Home;

