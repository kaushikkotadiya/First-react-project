import React from 'react'

export default function Link() {
  return (
    <section className="section_Link my-5 py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xxl-12 py-5 text-center">
            <h1 className="text-white"> Check Over My Video </h1>
            <p>"Never give up on something that you can't go a day without thinking about"</p>
            <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor"
                className="bi bi-box-arrow-right" viewBox="3 0 15 16">
                <path fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z">
                </path>
                <path fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z">
                </path>
              </svg>Check More
            </button>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Deva Deva - Extended Film Version|Brahmāstra |Amitabh B |Ranbir |aliabhatt |pritam7415 |Arijit|Jonita</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3>Are you sure to whan watch the video</h3>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="https://www.youtube.com/watch?v=mNuhKUOD_A0" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">Yas!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
