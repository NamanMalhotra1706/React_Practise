import React from 'react';



const footStyle={
        position : 'absolute',
        bottom:"0",
        width:"90%",
        height: "2.5rem",
        textAlign : 'center'
    };


 export default function Kepper(props){

    const styles = {
        note : {
            background : "#fff",
            borderRadius : "7px",
            boxshadow : "0 2px 5px white",
            padding: "10px",
            width: "240px",
            margin:"16px",
            float: "left",
        },

        h1:{
            fontSize:"1.1em",
            marginBottom: "6px",
        },

        p:{
            fontSize:"1.1em",
            marginBottom: "10px",
            whiteSpace: "pre-wrap",
            wordWrap: "break",
        }

    }

    // const handleOnChange = (event)=>{
    //     console.log("On Change");
    //     setText(event.target.value); 
    // }

    
    // const[text,setText]=useState();
   
   return(
    <>
    
        <div className='container'>
            <h1 className='m-3' style={{color: props.mode==='dark'?'white':'#042743'}}>Kepper</h1>
            <h4 className='m-15 p-15' style={{color: props.mode==='dark'?'white':'#042743'}}>Keep Your text secret from every one</h4>
            
            <div  style={styles.note}>
                <h3 style={styles.h1}>This is The tytle</h3>
                <p>This is the Content</p>
            </div>
        
            <footer style={footStyle}>
                copyright © By Naman Malhotra
            </footer>
        </div>
            
    </>
        
        )

 }