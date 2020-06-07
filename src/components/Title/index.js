import React from 'react';
import Typewriter from 'typewriter-effect';

import './style.scss';

const Presentation = () => (
  <main>
    <div className="presentation">
      <Typewriter
        options={{
          autoStart: true,
          cursor: null,
        }}
        onInit={(typewriter) => {
          typewriter.changeDelay(40)
            .typeString('Hello ! Moi, c\'est Bérénice Lortie, ')
            .start();
        }}
      />
      <Typewriter
        options={{
          autoStart: true,
          cursor: null,
        }}
        onInit={(typewriter) => {
          typewriter.changeDelay(40)
            .pauseFor(3000)
            .typeString('<span style="padding-left: 15rem"> Développeuse FULL-STACK !</span>')
            .pauseFor(1500)
            .deleteChars(12)
            .typeString('<span style="color:#00d2f8"> REACT JS</span> !')
            .pauseFor(1500)
            .deleteChars(10)
            .typeString('<span style="color:#6fb453"> NODE JS </span> !')
            .pause(1500)
            .deleteChars(10)
            .typeString('<span style="color:rgb(235, 70, 20)"> JAVASCRIPT </span> !')
            .start();
        }}
      />
    </div>
    <section className="scroll">
      <ion-icon name="chevron-down-outline" className="scroll-icon" />
    </section>
  </main>
);
export default Presentation;
