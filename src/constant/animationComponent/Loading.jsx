import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  const lottie = useRef();
  return (
    <Player
      ref={lottie}
      autoplay={true}
      loop={true}
      src='https://lottie.host/0a64fbd0-42f8-46fe-b2c4-a119aa46ac76/LvMJ7d1hJf.json'
      background='transparent'
      style={{ height: '8rem', width: '8rem' }}
    ></Player>
  );
};

export default Loading;
