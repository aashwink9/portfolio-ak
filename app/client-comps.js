"use client";
import React from 'react';
import Typewriter from "typewriter-effect";

export function TypewriterSub() {
    return (
      <div className='text-3xl text-indigo-200 mt-5 tracking-wider'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Software Developer')
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
  