import React ,{useState} from 'react';
import { motion } from "framer-motion";
import data from './data.json';
import img2 from './imgs/Path994.png';
import img3 from './imgs/Ellipse1.png';
const View =() =>{
    const [selectedId, setSelectedId] = useState(null);
    return(
        <div>
        <h1>hello</h1>
        <div className="relative">
            
            <img  src={img3}></img>
                <div className="absulot">
                   
                <img  src={img2}></img>
                </div>
        </div>
                </div>
    //     <AnimateSharedLayout type="crossfade">
    //     {data.map(item => (
    //       <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    //         <motion.h5>{item.subtitle}</motion.h5>
    //         <motion.h2>{item.title}</motion.h2>
    //       </motion.div>
    //     ))}
       
    //     <AnimatePresence>
    //       {selectedId && (
    //         <motion.div layoutId={selectedIdentifier}>
    //           <motion.h5>{item.subtitle}</motion.h5>
    //           <motion.h2>{item.title}</motion.h2>
    //           <motion.button onClick={() => setSelectedId(null)} />
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </AnimateSharedLayout>
    )
}

export default View ;
