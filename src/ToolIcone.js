import React from 'react';

const ToolIcone =(props) =>{
    
    return(
        <div className="IconContainer">
            <div className="profileHeaderStyle">
                    <img  src={props.photo}/>
                    <div  className="absulote">
                        <img src={props.icon}/>
                        
                    </div>
            </div>
            <div className="CaptionContainer">
                <span>{props.cap1}</span>
                <span className="IconSpan">{props.cap2}</span>
            </div>
            

        </div>
    )
}
export default ToolIcone;