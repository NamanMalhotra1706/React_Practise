import React , {useState} from 'react'

 export default function TextSpace(props){
    
    
    const UpperCase= ()=>{
        console.log("Upper Case Clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted into UpperCase","success")
    }
    const LowerCase=()=>{
        console.log("Lower Case Clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted into LowerCase","success")
    }
    
    const RemoveExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces is Removed","success")
    }
    const CopyText=()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success")
    }

    const ClearText=()=>{
        var text = document.getElementById('myBox');
        text.value="";
        props.showAlert("Text is cleared","success")
        
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value); 
    }

    
    const[text,setText]=useState('');
    return(
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1 " onClick={UpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={LowerCase}>Convert to LoweCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy All Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={ClearText}>Clear Text</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h4 className="py-4"> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</h4>
                <h4 className="pt-2.5"> Preview your Text </h4>
                <p>{text.length>0?text:"Enter Text to Preview"}</p>
            </div>
        </>
    )
}