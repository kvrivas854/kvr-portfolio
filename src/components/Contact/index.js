import React from "react";

import "./style.css"
// import { Link, Route } from "react-router-dom";
// import Project from "./components/Project/index";

function Contact() {

  return (
    <div className="m-20">
      <div className="flex flex-column text-center text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">04.</span>Contact</div>
      <p className="flex-column text-lg green-light box-sizing">
      I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <button className="spacing green-light text-md green-base hover green-button roboto">
     <a className="green-light" href="mailto:kellyv.rivas@gmail.com">Say hello!</a>
 
       
        </button>
    </div>
  );
}

export default Contact;
