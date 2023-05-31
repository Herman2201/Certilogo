import React, { useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../style/App.css';
function Animations() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const [isComplete, setComplete] = useState(false);
  const [isEnd, setEnd] = useState(false);
  const playerRef = useRef();
  let playVideo = (event) => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };
  // if (isComplete) {
  //   const videoElement = document.getElementById('home_video');
  //   console.log(videoElement);
  //   if (videoElement) {
  //     if (videoElement.playing) {
  //       // video is already playing so do nothing
  //     } else {
  //       // video is not playing
  //       // so play video now
  //       videoElement.play();
  //     }
  //   }
  // }

  if (isComplete) {
    playVideo();
  }

  const widthCircle = [
    [4, 4],
    [8, 8],
    [4, 4],
    [4, 4],
    [2, 2],
    [4, 4],
    [6, 6],
    [4, 4],
    [6, 6],
    [2, 2],
    [4, 4],
    [8, 8],
    [4, 4],
    [4, 4],
    [2, 2],
    [4, 4],
    [6, 6],
    [4, 4],
    [6, 6],
    [2, 2],
    [2, 2],
    [4, 4],
    [8, 8],
    [4, 4],
    [4, 4],
    [2, 2],
    [4, 4],
    [6, 6],
    [4, 4],
    [6, 6],
    [2, 2],
    [4, 4],
    [8, 8],
    [4, 4],
    [4, 4],
    [2, 2],
    [4, 4],
    [6, 6],
    [4, 4],
    [6, 6],
    [2, 2],
    [2, 2],
  ];

  const charch = ['3', 'L', 'G', 'C', '1', '2', '0', '5', '6'];
  React.useEffect(() => {
    // animation char
    anime({
      targets: '.el',
      translateX: (el, i, l) => {
        if (screenWidth <= 768) {
          return [
            anime.random(screenWidth / 3 - 100, screenWidth / 3),
            screenWidth / 2 - 6,
          ];
        }
        return [
          anime.random(screenWidth / 3 - 50, screenWidth / 3 + 100),
          screenWidth / 2 - 6,
        ];
      },
      translateY: function (el, i) {
        if (screenWidth <= 768) {
          return [anime.random(-40, 50), -6];
        }
        return [anime.random(-40, 100), -6];
      },
      scale: function (el, i, l) {
        if (screenWidth <= 768) {
          return [1, 0.3];
        }
        return [2, 0.3];
      },
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: function () {
        return 5000;
      },
      delay: function (el, i, l) {
        return i * 100;
      },
      easing: 'easeInOutExpo',
      update: function (anim) {
        setComplete(anim.progress > 85);
        setEnd(anim.progress > 80);
      },
    });

    anime({
      targets: '.rotate-div',
      rotate: 50,
      delay: 4000,
      duration: 3000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: '.reverse-rotate-div',
      rotate: -50,
      delay: 4000,
      duration: 3000,
      easing: 'easeInOutExpo',
    });

    anime({
      targets: '.rotate',
      rotate: function () {
        return [0, 15];
      },
      duration: function () {
        return 5000;
      },
      delay: 400,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
    });

    anime({
      targets: '.move',
      translateX: () => {
        if (screenWidth <= 320) {
          return -120;
        }
        return -162;
      },
      translateY: (el) => {
        return (screenHeight / 2) * -1 + 75;
      },
      duration: function () {
        return 900;
      },
      scale: 0.53,
      delay: 9000,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.cr',
      translateX: (el, i, l) => {
        if (screenWidth <= 768) {
          return [
            anime.random(screenWidth / 3 - 100, screenWidth / 3),
            screenWidth / 2,
          ];
        }
        return [
          anime.random(screenWidth / 3 - 50, screenWidth / 3 + 100),
          screenWidth / 2,
        ];
      },
      translateY: function (el, i) {
        if (screenWidth <= 768) {
          return [anime.random(-40, 100), 2];
        }
        return [anime.random(-40, 100), 2];
      },
      scale: () => {
        if (screenWidth <= 768) {
          return [1, 0.3];
        }
        return [2, 0.3];
      },
      duration: function () {
        return 5000;
      },
      delay: function (el, i, l) {
        return i * 20;
      },
      easing: 'easeInOutExpo',
    });
    const tl = anime.timeline({
      targets: '.opac',
      duration: function (el, i, l) {
        return 1500 + i;
      },
      delay: function (el, i, l) {
        return 2500 + i;
      },
      easing: 'easeOutExpo',
    });
    tl.add(
      {
        opacity: 1,
      },
      0
    );
  }, []);

  return (
    <div className="h-screen min-h-full relative justify-center overflow-hidden bg-white">
      <div className="justify-center m-auto pt-[10px]">
        {isComplete ? (
          <video
            id="home_video"
            className="absolute top-0 w-full text-center object-contain"
            muted
            playsInline
            autoplay="autoplay"
            width={100}
            height={100}
          >
            <source src="/fon.mp4" type="video/mp4" />
          </video>
        ) : (
          ''
        )}
        <img className="m-auto relative" src="/stone-logo-white.svg" alt="" />
        <p
          className="m-auto z-10"
          style={{
            paddingTop: '95px',
            color: 'rgb(255, 255, 255)',
            fontWeight: 'inherit',
            letterSpacing: 'normal',
            fontSize: '39px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Authentic
        </p>
        <div
          className="move absolute top-1/2 left-1/2"
          style={{
            transform: 'translateX(-30px) translateY(-33px)',
            // top: screenHeight / 2,
          }}
        >
          {isEnd ? (
            <img
              className="rotate"
              src="/svg-gobbler1.svg"
              width={75}
              height={75}
              alt=""
            />
          ) : (
            <img
              className="rotate"
              src="/svg-gobbler2.svg"
              width={75}
              height={75}
              alt=""
            />
          )}
        </div>
        {charch.map((item, i) => (
          <div key={i} className="opac absolute top-1/2 opacity-0">
            <span
              className="pl-1 el font-bold"
              style={{
                display: isComplete ? 'none' : 'block',
              }}
            >
              {item}
            </span>
          </div>
        ))}
        {widthCircle.map(([width, height], i) => (
          <div key={i} className="opac absolute top-1/2 opacity-0">
            <span
              className="cr bg-black"
              style={{
                width,
                height,
                borderRadius: '999px',
                display: isComplete ? 'none' : 'block',
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animations;
