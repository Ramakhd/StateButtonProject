import React from 'react';
import ReactDOM from 'react-dom';
import TabsComp from './TabsComp';
import Header from './Header';
import LogoBar from './LogoBar';
import ToolsBar from './ToolsBar';
import './App.scss';

const App =() => {

   
    return (
       <div className="AppContainer">
          
          <Header />
          <LogoBar />
          
             <TabsComp />
             
         
          
            
       </div>
    );
};
ReactDOM.render(<App />,document.querySelector('#root'))