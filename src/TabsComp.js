
import React , {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AboutUs from './AboutUs';
import Home from './Home';
import View from './View';
import data from './data.json';
import ToolsBar from './ToolsBar';

 const TabsComp = () => {

    const TabsMap=[
        {
            title:"Home",
            panel:<Home data={data}/>
        },
        {
            title:"Vue",
            panel:<View />
        },
        {
            title:"About us",
            panel:<AboutUs/>
        }
    ]    

return (
    <div> 
         <Tabs >
         <TabList className="tabList">
              { TabsMap.map((item,id) => {
                  return(
                       <Tab className="tabStyle" key={id}>{item.title}</Tab> )}
                  )
                }
          <ToolsBar/>
         </TabList> 
         
            { TabsMap.map((item,id) => {
                return(
                    <TabPanel  key={id}>{item.panel}</TabPanel>
                    )
            } 
            )} 
         </Tabs>
    </div>
)
}

export default TabsComp;