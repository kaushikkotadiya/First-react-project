import React from 'react'

export default function ContectUs() {
  return (
    <section className="section_ContectUs my-5 pt-5">
    <div className="text-center">
      <h1 className="display-4">Contect Us</h1>
      <hr className="w-25 mx-auto" />
    </div>

    <div className="container">
      <div className="row gy-2 my-5">
        <div className="col-md-8 col-10 col-xxl-8 mx-auto">

          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">First Name</label>
              <input type="First Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Last Name</label>
              <input type="Last Name" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
              <label className="pr-3">Gender</label>
              <div className="form-check form-check-inline pl-4">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                  value="option1"/>
                <label className="form-check-label" for="inlineRadio1">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                  value="option2"/>
                <label className="form-check-label" for="inlineRadio2">Female</label>
              </div>
            </div>

            <select className="form-select mb-3" aria-label="Default select example">
              <option selected>Select the className</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Thread</option>
            </select>

            <div className="mb-3">
              <label for="formFileMultiple" className="form-label">Select you file</label>
              <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Your comment</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
