import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div
        className="container animated fadeIn"
        style={{ marginTop: 30, float: "center" }}
      >
        <div className="row">
          <h1 className="header-title"> Contact </h1>
          <hr />
          <center>
            <div className="col-sm-12" id="parent">
              <div className="col-sm-6">
                <iframe
                  title='map'
                  width="100%"
                  height="320px;"
                  frameBorder={0}
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaY32Qm3KWTkRuOnKfoIVZws&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY"
                  allowFullScreen=""
                />
              </div>
              <div className="col-sm-6" style={{ marginTop: 30 }}>
                <form action="form.php" className="contact-form" method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="nm"
                      placeholder="Name"
                      required=""
                      autofocus=""
                    />
                  </div>
                  <div className="form-group form_left">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="em"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                      maxLength={10}
                      placeholder="Mobile No."
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control textarea-contact"
                      rows={5}
                      id="comment"
                      name="FB"
                      placeholder="Type Your Message/Feedback here..."
                      required=""
                      defaultValue={""}
                    />
                    <br />
                    <button className="btn btn-default btn-send">
                      <span className="glyphicon glyphicon-send" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>

    )
  }
}

export default Contact;