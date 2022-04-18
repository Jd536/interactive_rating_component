import React from "react";
import { useParams } from 'react-router-dom';
import {ReactComponent as Image} from '../images/illustration-thank-you.svg';

const ThankYou = () => {
  const params = useParams();


  return (
    <main className="container_main">
      <div className="thank_you_container">
        <div className="illustration_container">
          <Image />
        </div>
        <div>
          <p className="selected">{`You selected ${params.id} out of 5`}</p>
        </div>
        <div className="thank_you_message_container">
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
      </div>
    </main>
  )
}

export default ThankYou