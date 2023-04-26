import React from 'react'
import picA1 from './img/A1.jpg'


export default function About() {
  return (
    <section className="section_aboutus my-5">
    <div className="text-center">
      <h1 className="display-4"> About Us </h1>
      <hr className="w-25 mx-auto" />
    </div>

    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
          <figure>
            <img className="img-fluid about_img" src={picA1} alt="about img"/>
          </figure>
        </div>

        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
          <h1>My journey</h1>
          <p>A long journey by train is just an exciting experience.
            At times, it can be tiring, but we get a lot of pleasure.
            I remember when I was in className 8th, I went to Bangalore with my whole family to spend the summer vacation.
            Flight journeys might take only a few hours, and train journeys are time-consuming,
            but I love to travel by train with them. We see a lot of vendors coming in to sell tea,
            ice cream, biscuits, peanuts, etc. Those are the most exciting parts of a train journey when we buy food and
            share it with everyone.</p>
          <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Hello">Check More</button>
        </div>
      </div>

    </div>
  </section>
  )
}
