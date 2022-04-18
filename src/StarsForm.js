import React from "react";

const StartForm = ({submitHandler, changeHandler}) => {
  return(
    <form className="stars_options_form" onSubmit={submitHandler}>
      <div className="stars_options_container" >
          <div className="star_option_container">
            <input type="radio" id="one_star" name="stars" value={1}  onChange={changeHandler}/>
            <label htmlFor="one_star">1</label>
          </div>
          <div className="star_option_container">
            <input type="radio" id="two_stars" name="stars" value={2} onChange={changeHandler} />
            <label htmlFor="two_stars">2</label>
          </div>
          <div className="star_option_container">
            <input type="radio" id="three_stars" name="stars" value={3} onChange={changeHandler} />
            <label htmlFor="three_stars">3</label>
          </div>
          <div className="star_option_container">
            <input type="radio" id="four_stars" name="stars"  value={4} onChange={changeHandler}/>
            <label htmlFor="four_stars">4</label>
          </div>
          <div className="star_option_container">
            <input type="radio" id="five_stars" name="stars" value={5} onChange={changeHandler} />
            <label htmlFor="five_stars">5</label>
          </div>
      </div>
      <div className="submit_button_container">
      <button type="submit" id="submitButton"> SUBMIT</button>
    </div>
    </form>
  )
}


export default StartForm;