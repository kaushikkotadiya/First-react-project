import React from 'react'
let style2 = { "background-color": "#3b5998;" }
let style3 = { "background-color": "#55acee;" }
let style4 = { "background-color": "#dd4b39;" }
let style5 = { "background-color": "#ac2bac;" }
let style6 = { "background-color": "#0082ca;" }
let style7 = { "background-color": "#333333;" }
let style8 = { "background-color": "rgba(0, 0, 0, 0.2)"}
export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-black">
      <div className="container p-4 pb-0">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Kaushiktech
            </h6>
            <p>
              Achievements, the capacity to tackle specific challenges, years of experience, or a unique skill could all be part of your job. :)
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a className="text-black" href='/#'>Bootstrap</a>
            </p>
            <p>
              <a className="text-black" href='/#'>WordPress</a>
            </p>
            <p>
              <a className="text-black" href='/#'>Java Script</a>
            </p>
            <p>
              <a className="text-black" href='/#'>React js</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> Ahmedabad, India</p>
            <p><i className="fas fa-envelope mr-3"></i> kaushiktech@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 91 23456 75788</p>
            <p><i className="fas fa-print mr-3"></i> + 91 23456 75789</p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


            <a className="btn btn-primary btn-floating m-1" style={style2} href="/#" role="button"><i
              className="fab fa-facebook-f"></i>
            </a>


            <a className="btn btn-primary btn-floating m-1" style={style3} href="/#" role="button"><i
              className="fab fa-twitter"></i>
            </a>


            <a className="btn btn-primary btn-floating m-1" style={style4} href="/#" role="button"><i
              className="fab fa-google"></i>
            </a>


            <a className="btn btn-primary btn-floating m-1" style={style5} href="/#" role="button"><i
              className="fab fa-instagram"></i>
            </a>


            <a className="btn btn-primary btn-floating m-1" style={style6} href="/#" role="button"><i
              className="fab fa-linkedin-in"></i>
            </a>


            <a className="btn btn-primary btn-floating m-1" style={style7} href="/#" role="button"><i
              className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={style8}>
        © 2022 Copyright:
        <a className="text-black" href="/#">Kaushiktech.com</a>
      </div>
    </footer>
  )
}
