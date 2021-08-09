import React from 'react';
import img1 from './imgs/Path995.png';
import img2 from './imgs/Path994.png';
import img3 from './imgs/Ellipse1.png';

const Header = () =>{
    return(
        <div className="HeaderContainer">
            <div className="HeaderStyle">
                <img className="billStyle" src={img1}></img>
                <div className="profileHeaderStyle">
                    <img  src={img3}></img>
                    <div  className="absulote">
                        <img src={img2}></img>
                    </div>
                </div>
                <span className="welcomeStyle">welcome</span>
            </div>
            <div >
               <span className="welcomeStyle">Waiting List -{'>'} 14</span>
            </div>
        </div>
        
        
    
    )
}
export default Header;
