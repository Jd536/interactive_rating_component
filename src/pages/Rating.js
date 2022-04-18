import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

import {ReactComponent as Star} from '../images/icon-star.svg';
import StartForm from "../StarsForm";


const Rating = () => {
  let navigate = useNavigate();

  const [star, setStar] = useState();

  const submitHandler = (event) => {
    event.preventDefault(); 
    if(!star){
      alert("Please select a value!")
      return
    }
    console.log(star)
    navigate({
      pathname:`/thankyou/${star}`
    })
    
  }

  const changeHandler = (event) => {
    setStar(event.target.value)
  }
  return (
    <main className="container_main">
      <section className="star-icon-container">
        <div> <Star/> </div>
      </section>
      <section className="text_section">
        <h1>How did we do?</h1>
        <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </section>
      <StartForm submitHandler={submitHandler} changeHandler = {changeHandler} />
    </main>
  )
}

export default Rating