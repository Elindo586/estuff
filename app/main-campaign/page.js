"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import quotes from "../../thejsons/test-emails.json";

export default function Page() {
  const handleSubmit = () => {
    const d = new Date();
    const month = d.getMonth();
    const days = d.getDate();
    const year = d.getFullYear();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    var timesRun = 0;
    var arrayIndex = 0;

    console.log(
      `We are moving on ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
    );

    var myIntervals = setInterval(async function () {
      const currentQuote = quotes[arrayIndex++];

      const data = {
        email: currentQuote.email,
        id: currentQuote.id,
      };

      console.log(data);

      const response = await fetch("/my/email-test", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let res2;

      try {
        res2 = await response.json();
      } catch (err) {
        console.log("Error parsing", err);
      }

      const resMessage = res2.message;
      console.log(resMessage);

      const d = new Date();
      const month = d.getMonth();
      const days = d.getDate();
      const year = d.getFullYear();
      const hour = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      timesRun += 1;
      console.log(
        `we ran ${timesRun} times at ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
      );
      console.log(arrayIndex, quotes.length);

      if (arrayIndex === quotes.length) {
        console.log("We are done!");

        clearInterval(myIntervals);
        arrayIndex = 0;
      }
    }, 5 * 1000);
  };

  return (
    <div>
      <div className="col-md-12 main-contact-form-div">
        <h4 className="get-in-touch">Get in touch now.</h4>
        <br />
        <br />
        <button className="btn btn-primary form-button" onClick={handleSubmit}>
          click me
        </button>
      </div>
    </div>
  );
}
