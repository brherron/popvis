import React, { useRef, useState } from 'react';
import './PopVis.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faXmark, faClockRotateLeft, faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter, faVolumeLow, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

function PopVis({
  src,
  infoLink,
  height = '300px',
  buttonSize = '150px',
  buttonRadius = '100px',
  buttonText = 'More Info'
}) {
  const vidRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [destroyed, setDestroyed] = useState(false)

  const handlePlayVideo = () => {
    paused ? vidRef.current.play() : vidRef.current.pause();
    setPaused(!paused);
  }

  const handleSkip = (amount) => {
    vidRef.current.currentTime += amount;
  }

  return (
    <div 
      className='container' 
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      style={{ display: destroyed ? 'none' : 'block' }}
    >
      <div className='main' 
        style={{ 
          width: showVideo ? 'auto' : buttonSize, 
          height: showVideo ? height : buttonSize,
          borderRadius: showVideo ? '5px' : buttonRadius
        }}
      >
        {!destroyed && <video 
          ref={vidRef}
          height={showVideo ? height : buttonSize}
          style={{ 
            borderRadius: showVideo ? '5px' : buttonRadius,
            objectFit: 'fill'
          }}
          autoPlay={true}
          muted={muted}
          onClick={(e) => {
            e.preventDefault();
            if (!showVideo) {
              setShowVideo(true);
              setMuted(false);
            }
          }}
          onEnded={() => {
            setShowVideo(false);
            setPaused(true);
            setMuted(true);
            setTimeout(() => {
              setDestroyed(true);
            }, 1000);
          }}
        >
          <source src={src} type="video/mp4" />
        </video>}
      </div>
      <div 
        className="btn-controls"
        style={{ 
          display: showButtons && showVideo ? 'flex' : 'none',
        }}
      >
        <button className='btn-rewind' 
          onClick={(e) => {
            e.preventDefault();
            handleSkip(-11);
          }}
        >
          <FontAwesomeIcon icon={ faClockRotateLeft } />
        </button>
        <button className='btn-playpause' 
          onClick={(e) => {
            e.preventDefault();
            handlePlayVideo();
          }}
        >
          <FontAwesomeIcon icon={ paused ? faPlay : faPause } />
        </button>
        <button className='btn-forward' 
          onClick={(e) => {
            e.preventDefault();
            handleSkip(10);
          }}
        >
          <FontAwesomeIcon icon={ faClockRotateLeft } style={{ transform: 'scaleX(-1)' }} />
        </button>
      </div>
      <button className='btn-close' 
          onClick={(e) => {
            e.preventDefault();
            setDestroyed(true);
          }} 
          style={{ 
            display: showButtons ? 'block' : 'none',
            fontSize: showVideo ? '26px' : '18px',
            margin: showVideo ? '0.3rem' : '0' 
          }}
        >
          <FontAwesomeIcon icon={ faXmark } />
      </button>
      <a className='btn-open' 
        href={infoLink}
        target="_blank"
        rel="noreferrer"
        style={{ 
          display: showButtons && showVideo ? 'block' : 'none',
          fontSize: showVideo ? '20px' : '14px',
          margin: showVideo ? '0.3rem' : '0'
        }}
      >
        {infoLink && buttonText}
      </a>
      <div className="btn-row">
        <button className='btn-muted' 
          onClick={(e) => {
            e.preventDefault();
            setMuted(!muted);
          }} 
          style={{ 
            display: showButtons ? 'block' : 'none',
            fontSize: showVideo ? '22px' : '14px',
            margin: showVideo ? '0.3rem' : '0' 
          }}
        >
          <FontAwesomeIcon icon={ muted ? faVolumeLow : faVolumeMute } />
        </button>
        <button className='btn-size' 
          onClick={(e) => {
            e.preventDefault();
            setMuted(muted && showVideo);
            setShowVideo(!showVideo);
          }} 
          style={{ 
            display: showButtons ? 'block' : 'none',
            fontSize: showVideo ? '20px' : '14px',
            margin: showVideo ? '0.3rem' : '0' 
          }}
        >
          <FontAwesomeIcon icon={ showVideo ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter } />
        </button>
      </div>
    </div>
  );
}

export default PopVis