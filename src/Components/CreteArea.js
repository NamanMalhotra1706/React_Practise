import React , {useState} from 'react';

function CreateArea(props){

    const styles = {
            form:{
            position: "relative",
            width: "480px",
            margin: "30px auto 20px auto",
            background: "#fff",
            padding: "15px",
            borderRadius: "7px",
            boxShadow: "0 1px 5px #9E9E9E",
          },

          input:{
            width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none",
          },

          textarea :{
            width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none",
          },

          button : {
            position: "absolute",
            right: "18px",
            bottom: "-18px",
            background: "#f5ba13",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            boxShadow: "0 1px 3px #9E9E9E",
            cursor: "pointer",
            outline: "none",
          },

    }

    const [note,setNote] = useState({
        keeperTitle : "",
        message : ""
      });
    
    function handleChange(event){

      const {name,value}=event.target;

      setNote(prevNote =>{
        return {
          ...prevNote,
          [name]:value
        };
      });
    }

    function submitNote(event){
        props.onAdd(note);
        
    }
  

        return (
            <div>
                <div style={styles.form} >
                    <input style={styles.input} name='keeperTitle' onChange={handleChange} placeholder='Title' value={note.keeperTitle}/>
                    <textarea style={styles.textarea} name='message' onChange={handleChange} placeholder='Take a note...' rows='5' value={note.message} />
                    <button style={styles.button} onClick={submitNote}>Add</button>
                </div>
            </div>
        );
}
export default CreateArea;