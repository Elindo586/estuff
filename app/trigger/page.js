"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Page() {
    const triggerRoute = async () => {
        
        const response = await fetch("/my/ecron", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify("hello"),
          });
        const data = await response.json();
        console.log(data.message); // Logs: 'Route triggered!'
    }

  return (
    <div>
      <div className="col-md-12 main-contact-form-div">
        <h4 className="get-in-touch">Get in touch now.</h4>
        <br />
        <br />
        <button className="btn btn-primary form-button" onClick={triggerRoute}>
          click me
        </button>
      </div>
    </div>
  );
}