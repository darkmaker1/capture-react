import React from "react";
import home1 from '../img/home1.png';

const AboutSection = () =>{
    return(
    <div>
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>we work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span> come</h2>
                </div>
                <div className="hide">
                    <h2>true.</h2>
                </div>
            </div>
            <p>Contact us or any photography or videography ideas that you have.
                we have profissional with amazing skills.
            </p>
            <button>contact us</button>
        </div>
        <div className="image">
            <img src={home1} alt="guy with a camera" />
        </div>
    </div>
    )
}

export default AboutSection;