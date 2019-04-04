import React from 'react';

const Landing = () => (
   <section className="landing">
     <div className="banner">
       <img className="banner-img" src='assets/images/banner.jpg' alt="Bloc Jams Banner"></img>
       <p className="hero-title">TURN THE MUSIC UP</p>
     </div>

    <section className="selling-points">
      <div className="point">
        <span className="icon ion-music-note"></span>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description"><span>The world is full of music; why should you have to listen to music that someone else chose?</span></p>
      </div>
      <div className="point">
        <span className="icon ion-wifi"></span>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description"><span>No arbitrary limits. No distractions.</span></p>
      </div>
      <div className="point">
        <span className="icon ion-iphone"></span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description"><span>Listen to your music on the go. This streaming service is available on all mobile platforms.</span></p>
      </div>
    </section>
   </section>
 );

export default Landing;
