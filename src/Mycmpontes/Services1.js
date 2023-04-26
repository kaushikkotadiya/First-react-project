import React from 'react'
import '../';
import img1 from './img/c1.jpg'
import img2 from './img/c2.jpg'
import img3 from './img/c3.jpg'
let style1 = { "max-width": "540px;" }
export default function Services1() {
  return (
    <section className="section_Services my-5 bg-light pt-5">
    <div className="text-center">
      <h1 className="display-4">Services</h1>
      <hr className="w-25 mx-auto" />
    </div>
    <div className="container Services">
      <div className="row my-5">
        <div className="col-md-4 col-10  col-xxl-4 mx-auto">
          <div className="card mb-3" style={style1}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img1} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-10  col-xxl-4 mx-auto">
          <div className="card mb-3" style={style1}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img2} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-10  col-xxl-4 mx-auto">
          <div className="card mb-3" style={style1}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img3} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 text-center my-5">
          <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Hii Profesnal">Check More</button>
        </div>
      </div>
    </div>
  </section>
  )
}
