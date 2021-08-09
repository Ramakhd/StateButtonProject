import React from 'react';
import ToolIcone from './ToolIcone';

import pic1 from './imgs/mic.png';
import pic2 from './imgs/Green.png';

import pic3 from './imgs/orange.png';
import pic4 from './imgs/wifi.png';

import pic5 from './imgs/red.png';
import pic6 from './imgs/vid.png';
import { ListItemAvatar } from '@material-ui/core';


const ToolsBar =() => {

    const IconList=[

        {
            loop:"./imgs/mic.png",
            icon:"./imgs/Green.png",
            cap1:"Voice Test",
            cap2:"Very Good"
        },
        {
            loop:"./imgs/orange.png",
            icon:"./imgs/wifi.png",
            cap1:"Voice Test",
            cap2:"Very Good"  
        }
    ]

    return(
        <div className="IconBarContainer">
            {/* {
                IconList.map((icon,id)=>{
                    return(
                        <ToolIcone key={id} photo={icon.loop}
                        icon={icon.icon}
                        cap1={icon.cap1}
                        cap2={icon.cap2}/>
                    )
                })
            } */}

            <ToolIcone photo={pic2}
                icon={pic1}
                cap1="Voice Test" 
                cap2="Very Good"/>

            <ToolIcone photo={pic3}
                icon={pic4}
                cap1="Network Connection" 
                cap2="Very Good"/>

            <ToolIcone photo={pic5}
                icon={pic6}
                cap1="Video Test" 
                cap2="Very Good"/>
        </div>
        
        
    )
}
export default ToolsBar;