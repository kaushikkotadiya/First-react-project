import React from 'react'


import g3 from './img/g3.jpg';
import g8 from './img/g8.jpg';
import g9 from './img/g9.jpg';

import g4 from './img/g4.jpg';
import g5 from './img/g5.jpg';
import g6 from './img/g6.jpg';


import g11 from './img/g11.jpg';
import g12 from './img/g12.jpg';
import g13 from './img/g13.jpg';


export default function Gallery() {
  return (
    <section className="section_gallery my-5 pt-5">
    <div className="text-center">
      <h1 className="display-4">Gallery</h1>
      <hr className="w-25 mx-auto" />
    </div>

    <div className="container">
      <div className="row gy-2 my-5">
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g3} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g8} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g9} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g4} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g5} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g6} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g11} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g12} alt="gallery image" />
          </figure>
        </div>

        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img className="img-fluid" src={g13} alt="gallery image" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  )
}
