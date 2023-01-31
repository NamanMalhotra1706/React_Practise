import React from 'react';

const footStyle={
        position : 'realtive',
        bottom:"0",
        width:"90%",
        height:"2",        
        textAlign : 'center'
    };

export default function Footer(props){
 const currentYear = new Date().getFullYear();
   return(
    <>

        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <footer style={footStyle} >
                copyright © By Naman Malhotra @ {currentYear}
            </footer>
        </div>
            
    </>
        )
 }