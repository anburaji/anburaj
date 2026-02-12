import { useState } from "react";
import "../css/AR_insidepage.css";

function AR_insidepage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container1 sticky-top">
      <div
        className={`envelope ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="cover">
          <p className="cover-text">Open...</p>
          <span className="cover-text1" style={{fontSize:"100px"}}>🩵</span>
          {/* <span className="cover-text2"> 🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵</span>  */}

        </div>

        <div className="letter">
          <h4 style={{ textAlign: "center", color: "mediumpurple" }}>Happy Valentine's day ma 💗</h4>
          <h6 style={{ textAlign: "center" }}> You are always on my mind and forever in my heart.
            I loved you yesterday, I love you today, and I will love you for every tomorrow.❤️
            <br></br> <br></br>
            You are my bestfriend, my soulmate,
            my biggest supporter, my peace and the Love of My life.💕
            <br></br>
            <br></br>I LOVE YOU FOREVER 💖...
            <br></br>
            <br></br>
            You are so lucky to have me.<br></br>I'm yours.NO REFUNDS! okay.😄😂
            <br></br>I know you understand that.🥰  
              
          </h6>
          <h6 style={{ textAlign: "center" }}>Love you so much da chlm❤️💕...👇 </h6>
          <a href="/AR_heart" style={{ textAlign: "center", display: "block" }}>Click here </a>
        </div>

        <div className="back"></div>
      </div>
      <div className="card1 card p-1 shadow text-center mt-5 w-70">
        <h4>Open The Letter!💖👆</h4>
        {/* <p>You made my day 💕</p> */}
      </div>
    </div>
  );
}

export default AR_insidepage;
