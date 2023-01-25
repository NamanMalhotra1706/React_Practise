// import React , { useState } from "react"
export default function FAQ(props){

    // const [mystyle ,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'

    // })
    // const [btnState ,newBtnState]=useState("Enable Light Mode");

  let mystyle={
    color :props.mode ==='dark'?'white':'black',
    backgroundColor :props.mode ==='dark'?'#042743':'white',
    

  }

    // const ChangeMode=()=>{
    //     if(mystyle.color==='white'){
    //         setMyStyle({
                
    //             color:'black',
    //             backgroundColor:'white',
    //             border : '2px solid white'
    //         })
    //         newBtnState("Enable Dark Mode")
    //     }
         
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         newBtnState("Enable Light Mode")
    //     }
    // }





    return(
        <>
        <div className="container my-3 p-5" style={mystyle}>
        <h1> Frequently Asked Questions</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed " style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne ">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>


 <div className="container">

{/* <button onClick={ChangeMode} type="button" class="btn btn-primary" >{btnState}</button> */}
</div> 
</div>
        </>
    )
}