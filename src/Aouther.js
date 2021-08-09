import React from 'react';
//{img,name,title,description}
const Aouther =(props) =>{
    const auther=props.auther;
    console.log("auther ",props);
    return(
        <div className="autherStyle">
            <img src={auther.img}/>
            <span>{auther.name}</span>
            <span>{auther.title}</span>
            <span>{auther.description} </span>
        </div>
    )

}

export default Aouther;