import "../css/AR_valentine.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AR_valentine() {

  const navigate = useNavigate();
  const [showEmoji, setShowEmoji] = useState(false);

  return (
    <div className="cont">
      <div className="container  d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow">
          <h1 className="text">Anbu, </h1>
          <h2 className="text">
            will you be my valentine?💕💖
          </h2>
          <div className="button">
            <button className="btn btn-danger me-3" onClick={() => navigate("/AR_insidepage")}>
              YES 💗
            </button>

            {showEmoji && (
              <h3 style={{ fontSize: "25px" }}>
                👈😡
              </h3>
            )}

            <button
              className="btn btn-secondary"
              onClick={() => setShowEmoji(true)}
            >
              NO
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AR_valentine;
