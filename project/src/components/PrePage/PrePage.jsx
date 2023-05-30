import { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';

const PrePage = ({ animetion, setAnimetion }) => {

  const el = useRef(null);
  const el1 = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['&#171;Из чего бы ни были сотворены наши души, ее душа и моя — одно&#187;'],
      typeSpeed: 40,
    });
    const typed1 = new Typed(el1.current, {
      strings: ['Эмилия Бронте &#171;Грозовой перевал&#187;'],
      typeSpeed: 85,
    });

    return () => {
      typed.destroy();
      typed1.destroy();
    }
  }, []);

  return (
    <div
      className={`z-10 absolute h-full w-full bg-white flex flex-col justify-center ${
        animetion ? 'animate-wiggle' : ''
      }`}
    >
      <div className="h-1/2 m-auto items-center container flex flex-col  justify-between">
        <div className="flex flex-col w-10.5/12">
          <p className="font-serif text-4xl">
            <span ref={el} style={{ whiteSpace: 'pre' }}></span>
          </p>
          <div className="flex justify-end">
            <div className="flex justify-start">
           <p className="mt-16 text-xl">
           <span ref={el1} style={{ whiteSpace: 'pre' }}></span>
           </p>
            </div>
          </div>
        </div>
        <button onClick={() => setAnimetion(!animetion)}>Continue</button>
      </div>
    </div>
  );
};

export default PrePage;
