import React from "react";
import Header from "../header";
import Background from "../../images/background.gif";
import "../../App.css";

function Contact() {
  return (
    <div
      style={{
        flex: 1,
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div
        style={{
          flex: 2,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button class="card">
          <div class="row clearfix">
            <div class="left med" style={{position: 'absolute', top: 30, left: 20}}>765-767-3217</div>
            <div class="right med" style={{position: 'absolute', top: 30, right: 20}}>
              <p>jiwoong97@gmail.com</p>
            </div>
          </div>
          <div class="row">
            <p>
              <span class="big">Ji Woong Park</span>
            </p>
            <p>
              <span class="med no-space">S</span>
              <span class="small no-space">oftware Engineer</span>
            </p>
          </div>
          <div class="row" style={{position: 'absolute', bottom: 20, right: 50, left: 50}}>
            <p>
              <span class="med">102 N </span>
              <span class="med">Chauncey Ave, APT 411, </span>
              <span class="med">West Lafayette, </span>
              <span class="med">IN 47906</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Contact;
