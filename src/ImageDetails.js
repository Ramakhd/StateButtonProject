import React, { useState , useEffect} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const ImageDetails = (props) => {
  // console.log("**** ",props.img);
    const { src , title , des ,sliderImgs }= props.img;
  
    const [item,setSlider]= useState([]);

    useEffect(() => {
 
      console.log("innn ",props.img);
           setSlider(props.img.sliderImgs);
           console.log("item ",item);
  }, [props.img.sliderImgs])



    return(
       <div className="SelectedImgContainer">
           {/* <img className="SelectedImg" src={src}/> */}
           <div>
          {item.length>0 &&
        
          <AwesomeSlider className="SelectedImg">{
            item.map((img,id) =>{
                return(
                    <div  data-src={img.url}/>
                )
            })
         
            }
        
            {/* <div data-src={pic1}/>
            <div data-src={pic2}/>
            <div data-src={pic3}/> */}

        </AwesomeSlider>
        
            //  <SimpleImageSlider
            //         navStyle={1}
            //         showNavs={true}
            //         showBullets={true}
            //         width={500}
            //         height={500}
            //         images={item}
            //     /> 
          }   
          </div>
          {/* <div className=""> */}
           <span className="selectedTitle">{title}</span>
           <span className="ImgDescription">{des}</span>
           {/* </div> */}
       </div>
    )
}
export default ImageDetails;