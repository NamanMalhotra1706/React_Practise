
import './App.css';
import Navbar from './Components/Navbar'
import FAQ from './Components/FAQ'
import TextUtilts from './Components/TextUtilts'
import { useState } from 'react';
import Alert from './Components/Alert';
import{Routes,Route}from "react-router-dom";
import Kepper from './Components/Keeper';

function App() {
  const  [mode,setMode] = useState('light');

const [alert,setAlert] =useState(null);

const showAlert=(message,typeofmessage)=>{
  setAlert({
    mssg:message,
    type:typeofmessage
  })
  setTimeout(()=>{
      setAlert(null);
  },2000)
}

  

  const togglemode=()=>{
   

    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert('Dark Mode is Enabled','success');
    document.title="Project -Dark Mode";

   }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';  
      showAlert('Light Mode is Enabled','success');
      document.title="Project -Light Mode";
    }
  }

  return (
    <>
    
    <Navbar title="Texting"  mode={mode} toggleMode={togglemode}/>
    <Alert alert={alert} /> 
    
    <></>
  
        <Routes>
          {/* <Route path="/" element={}/> */}
          <Route exact path="/FAQ" element={<FAQ mode={mode}/>}/>
          <Route  path='/Kepper' element={<Kepper mode={mode} className = "note"/>}/>
          <Route exact path="/TextUtilts" element={<TextUtilts showAlert={showAlert} heading="Enter the Text to anyalyse below" mode={mode}/> }/>
        </Routes>
    </>
  );
}

export default App;
