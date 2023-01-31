import React from 'react';

 export default function Kepper(props){

    const styles = {
        note : {
            background : "#fff",
            borderRadius : "7px",
            boxShadow : "0px 2px 5px #9E9E9E",
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
        },
        button : {
            position: "relative", 
            margin : "0 0 0 160px",
            background: "#f5ba13",
            color: "#fff",
            border: "none",
            boxShadow: "0 1px 3px #9E9E9E",
            cursor: "pointer",
            outline: "none",
          }

    }
   function funcDelete(){
        props.onDelete(props.id);
     }
   return(
    <>
        <div className='container'>
           
            <div  style={styles.note}>
                <h3 style={styles.h1}>{props.keeperTitle}</h3>
                <p>{props.message}</p>
                <button onClick={funcDelete} style={styles.button}>Delete</button>
            </div>
        </div>
            
    </>
        )

 }