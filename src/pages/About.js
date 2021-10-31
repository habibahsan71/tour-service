import React from "react";

const About = () => {
  return (
    <div className='container my-5'>
      <div className='my-5 row'>
        <div className='col-md-7 col-sm-12 text-center'>
          <h1>Our <span className="text-primary">Services</span>? </h1>
          <p className="para">
            Tour guides tend to be predominantly social individuals, meaning that they thrive in situations where they can interact with, persuade, or help people. They also tend to be enterprising, which means that they are usually quite natural leaders who thrive at influencing and persuading others. And we Provide the best..
          </p>
        </div>
        <div className='col-12 col-md-4 text-center'>
          <img className="w-75 rounded " src="/4.jpg" alt="healthy food"></img>
        </div>
      </div>
      <div className='mt-5 row'>
        <div className='col-md-4 text-center'>
          <img className="w-75 rounded" src="/02.jpg" alt="healthy food"></img>
        </div>
        <div className='col-md-7 text-center'>
          <h1>We Provide Best <span className="text-primary">Tour Plans</span></h1>
          <p className="para">
            - Knowledge of the Tour Area.
            <br />
            - Ability to Communicate Effectively.
            <br />
            - Strong Empathy and Understanding.
            <br />
            - Charismatic Personality.
            <br />
            - Keen Ability to Improvise and Adapt.
            <br />
            - Focuses on Building Rapport.
            <br />
            - Engaging Storyteller and Actor.

          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
