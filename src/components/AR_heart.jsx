import "../css/AR_heart.css";
import { useRef, useState } from "react";

function AR_heart() {
 
    const videos = ["/video/ar-1.mp4", "/video/ar-2.mp4", "/video/ar-3.mp4", "/video/ar-4.mp4", "/video/ar-5.mp4"];
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const handleEnded = () => {
    // setIndex((prev) => (prev + 1) % videos.length);
    if (index < videos.length - 1) {
    setIndex(index + 1);   // Play next video
  }else{
    setFinished(true);
  }
  };

  return (
    
    
    <div className="cont-1 container vh-100 d-flex justify-content-center align-items-center">
      <div className="card-2 card h-80 p-5 shadow text-center">
         <h1>❤️💗I LOVE YOU 💗💖</h1>
        <h5>💗FOREVER CHLM 💕❤️</h5>
          <div className="heart-page">
      {!finished &&(<video
       key={index}
        ref={videoRef}
        src={videos[index]}
        autoPlay
        controls
        playsInline
        onEnded={handleEnded}
        className="heart-video"
      />
      )}
    </div>
      </div>
    </div>
  );
}

export default AR_heart;
