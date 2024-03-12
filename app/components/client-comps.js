"use client";
import React from 'react';
import Typewriter from "typewriter-effect";
import './hamburger.css';

export function TypewriterSub() {
    return (
      <div className='text-3xl text-indigo-200 mt-5 tracking-wider'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Software Developer')
            .deleteChars(9)
            .typeString('Engineer')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Artist')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Musician')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Explorer')
            .pauseFor(1000)
            .start();
        }}
        options={{
            autoStart: true,
            loop: true
        }}
      />
      </div>
    );
}

export function Hamburger() {
  const [isActive, setActive] = React.useState(false);
  const ToggleClass = () => {
    setActive(!isActive); 
  };

  let isOpen = isActive ? 'open' : 'menu'

  return (
    <div className='hamburger' onClick={ToggleClass}>
      <div className={isOpen + ' btn1'} data-menu="1">
        <div className="icon-left"></div>
        <div className="icon-right"></div>
      </div>
    </div>
  );
}
