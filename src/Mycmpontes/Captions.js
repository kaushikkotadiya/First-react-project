import React from 'react'
import pic2 from './img/1.jpg'
import pic1 from './img/2.jpg'
import pic3 from './img/3.jpg'
export default function Captions() {
  return (
    <section>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic2} className="d-block w-100" alt="First"/>
          <div className="carousel-caption d-md-block">
            <h5>Galaxies</h5>
            <p>For millennia, people have speculated about our place in the cosmos, with many traditions placing humans
              literally in a central position. Only in the last few centuries have observations and experiments
              gradually
              led us to the humbling conclusion that our position in the wider Universe is unremarkable.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic1} className="d-block w-100" alt="Second"/>
          <div className="carousel-caption d-md-block">
            <h5>Galaxies</h5>
            <p>For millennia, people have speculated about our place in the cosmos, with many traditions placing humans
              literally in a central position. Only in the last few centuries have observations and experiments
              gradually
              led us to the humbling conclusion that our position in the wider Universe is unremarkable.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic3} className="d-block w-100" alt="Third"/>
          <div className="carousel-caption d-md-block">
            <h5>Galaxies</h5>
            <p>For millennia, people have speculated about our place in the cosmos, with many traditions placing humans
              literally in a central position. Only in the last few centuries have observations and experiments
              gradually
              led us to the humbling conclusion that our position in the wider Universe is unremarkable.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  )
}
