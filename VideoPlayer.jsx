import React, { useState } from 'react';

import './videoPlayer.scss'


const VideoPlayer = ({ videoUrl, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={handleClick}>{title}</button>
      {isOpen && (
        <div className="fullscreen-video">
          <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      )}
    </div>
  );
};

export default VideoPlayer;
