import React from 'react'
import '../Styles/style.css';


export class Home extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="hero-carousel container-fluid">
            <div
              id="carouselExample"
              className="carousel slide w-100"
              data-bs-ride="carousel"
              data-bs-interval={3000}
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={0}
                  className="active"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={1}
                />
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={2}
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2>HOW TO STAY SAFE IN MEXICO AS A SOLO TRAVELER</h2>
                    <p>Mexico</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2>THE BEST WALKING TOURS IN AMSTERDAM</h2>
                    <p>Amsterdam</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2>THE BEST, MOST DELICIOUS FOOD TOUR IN MADRID</h2>
                    <p>Madrid</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                data-bs-target="#carouselExample"
                type="button"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#carouselExample"
                type="button"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="container d-flex feature-section">
            <div className="col-4 feature-wrapper">
              <img
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="feature-img" alt='' />
              Daily Blog
              <br />
              updates
              <hr className="divider-1" />
            </div>
            <div className="col-4 feature-wrapper">
              <img
                src="https://images.unsplash.com/photo-1528195135899-cf5d190bb3a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="feature-img" alt=''
              />
              Blog for Life
              <br />
              enthusiastic
              <hr className="divider-1" />
            </div>
            <div className="col-4 feature-wrapper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUl0QmQtr4Sjow2BZMNYXHhVobmY7zSPml-AP7pXm9PbKNgsE-L4Qo_9TuQQK6Y1vl8E&usqp=CAU"
                className="feature-img" alt=''
              />
              Explore the world
              <br />
              with me
            </div>
          </div>
        </section>
        {/* TRAVEL GALLERY */}
        <div className="container-fluid">
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
            TRAVEL GALLERY
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-start">
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/M185_qYH8vg/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/sesveuG_rNo/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/2gYsZUmockw/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href='/' className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      
      </>
    )
  }
}


export default Home