import React from 'react';
import Header from './components/Header/Header';

import './App.css'


const App = () => {
  // let logo ="https://i.etsystatic.com/17330034/r/il/973701/2883656815/il_340x270.2883656815_i0o4.jpg"
  let logo ="https://cdn.shopify.com/s/files/1/0266/0731/files/logo-ai-horizontal_348e1707-0085-4360-a8be-db465ae56dd6_150x.png?v=1605031338"
 
  return (
    <div>
      <Header className="header" logo={logo} navItems2={navItems2} navItems={navItems}/>
    </div>
  );
};

export default App;
