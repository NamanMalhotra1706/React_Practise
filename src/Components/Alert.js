import React from 'react';


export default function Alert(props){
  const Capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    return(
      // CLS(Commulate Layout Shift)=>
      <div style={{height:'50px'}}> 
      {/* ==> Isse kya hua ki jo Alert ki wajah sa Layout uppar niche hora tha abb nahi hogga */}

      {/* ==> Ye niche walla { } --> Iske Andar islia hai kio ki ye sarri ki sarri JAvscript hai na  */}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.mssg}
      </div> }
      </div>
      
        
    

    
    
    )
}