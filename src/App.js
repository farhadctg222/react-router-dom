
import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Shop from './componet/Shop/Shop';
import React from 'react';
import Card from './componet/Card/Card';
import Add from './componet/Add/Add';
import History from './componet/History/History';
import Found from './componet/Found/Found';
import Bangla from './componet/Bangla';
import Frind from './componet/frind';


function App() {
  return (
    <BrowserRouter>
    <Card></Card>
   <Routes>
    
    
   
    <Route path="/math" element={<Add />}></Route>
    <Route path="/english" element={<Shop />}></Route>
    <Route path="/history" element={<Shop />}></Route>
    <Route path='/frind/:frindi' element={<Frind/>}></Route>
    
    <Route   path="/bangla" element={<Bangla />}></Route>
    <Route exact  path="*" element={<Found />}></Route>

    
    
   </Routes>
   
      
     
    
    </BrowserRouter>
  );
}

export default App;
