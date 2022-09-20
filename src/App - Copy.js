import React, { Component, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login1 from "./components/Login1";
import Regster from './components/Register';
import Dashboard from './components/Dahboard';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/flaticon.css';
import './assets/css/slick-slider.css';
import './assets/css/fancybox.css';
import './assets/css/plugin.css';
import './assets/css/color.css';
import './assets/css/style.css';
import './assets/css/responsive.css';


function App() {
  console.log('11111;;;;');
  const [showModal, setShow] = useState(false);
  console.log('22222;;;;');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setuser] = useState({ Email: '', Password: '' });
  useEffect(() => {
    var a = localStorage.getItem('myData');
    var b = JSON.parse(a);
    console.log('hi....');
    //console.log(b.Username);
    setuser(b)
    //console.log(user.Username)

  }, []);

  const [message, setMessage] = useState("");

  return (
    <div className="App" title={message}>

      <div className="careerfy-wrapper">


        <header id="careerfy-header" className="careerfy-header-one">
          <div className="container">
            <div className="row">
              <aside className="col-md-2"> <a href="#" className="careerfy-logo"><img src={require('./assets/images/logo.jpeg')} alt="" /></a> </aside>
              <aside className="col-md-6">
                <nav className="careerfy-navigation">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#careerfy-navbar-collapse-1" aria-expanded="false">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="careerfy-navbar-collapse-1">
                    <ul className="navbar-nav">
                      <li className="active submenu-addicon"><a href="/index.html">Home</a>
                        <ul className="sub-menu">
                          <li><a href="/">Demo Careerfy</a></li>
                          <li><a href="-demos/hireright-demo/">Demo Hireright</a></li>
                          <li><a href="-demos/jobshub-demo/">Demo Jobshub</a></li>
                          <li><a href="-demos/belovedjobs/">Demo BelovedJobs</a></li>
                          <li><a href="/index-five.html">Demo JobsOnline</a></li>
                          <li><a href="/index-six.html">Demo JobSearch</a></li>
                          <li><a href="/index-seven.html">Demo JobFinder</a></li>
                        </ul>
                      </li>
                      <li className="submenu-addicon"><a href="/#">Pages</a>
                        <ul className="sub-menu">
                          <li><a href="/about-us.html">About Us</a></li>
                          <li><a href="/cv-packages.html">CV Packages</a></li>
                          <li><a href="/faq.html">Faq's</a></li>
                          <li><a href="/job-grid-full.html">Job Grid</a></li>
                          <li><a href="/job-grid-with-filters.html">Job Grid W/filter</a></li>
                          <li><a href="/job-listings.html">Job Listings</a></li>
                          <li className="submenu-addicon"><a href="/job-detail.html">Job Detail</a>
                            <ul className="sub-menu">
                              <li><a href="/job-detail.html">Job Detail I</a></li>
                              <li><a href="/job-detail-two.html">Job Detail II</a></li>
                              <li><a href="/job-detail-three.html">Job Detail III</a></li>
                              <li><a href="/job-detail-four.html">Job Detail IV</a></li>
                            </ul>
                          </li>
                          <li><a href="/job-packages.html">Job Packages</a></li>
                        </ul>
                      </li>
                      <li className="submenu-addicon"><a href="/#">For Candidates</a>
                        <ul className="sub-menu">
                          <li><a href="/candidate-dashboard-applied-jobs.html">Applied Jobs</a></li>
                          <li><a href="/candidate-dashboard-changed-password.html">Changed Password</a></li>
                          <li><a href="/candidate-dashboard-cv-manager.html">CV Manager</a></li>
                          <li><a href="/candidate-dashboard-job-alert.html">Job Alert</a></li>
                          <li><a href="/candidate-dashboard-profile-seting.html">Profile Setting</a></li>
                          <li><a href="/candidate-dashboard-resume.html">Candidate Resume</a></li>
                          <li><a href="/candidate-dashboard-saved-jobs.html">Saved Jobs</a></li>
                          <li><a href="/candidate-listings.html">Candidate Listings</a></li>
                          <li><a href="/candidate-grid.html">Candidate Grid</a></li>
                          <li className="submenu-addicon"><a href="/candidate-detail.html">Candidate Detail</a>
                            <ul className="sub-menu">
                              <li><a href="/candidate-detail.html">Candidate Detail I</a></li>
                              <li><a href="/candidate-detail-two.html">Candidate Detail II</a></li>
                              <li><a href="/candidate-detail-three.html">Candidate Detail III</a></li>
                              <li><a href="/candidate-detail-four.html">Candidate Detail IV</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu-addicon"><a href="/#">For Employers</a>
                        <ul className="sub-menu">
                          <li><a href="/employer-list.html">Employer List</a></li>
                          <li><a href="/employer-grid.html">Employer Grid</a></li>
                          <li className="submenu-addicon"><a href="/employer-detail.html">Employer Detail</a>
                            <ul className="sub-menu">
                              <li><a href="/employer-detail.html">Employer Detail I</a></li>
                              <li><a href="/employer-detail-two.html">Employer Detail II</a></li>
                              <li><a href="/employer-detail-three.html">Employer Detail III</a></li>
                              <li><a href="/employer-detail-four.html">Employer Detail IV</a></li>
                            </ul>
                          </li>
                          <li><a href="/employer-dashboard-transactions.html">Transactions</a></li>
                          <li><a href="/employer-dashboard-resumes.html">Employer Resumes</a></li>
                          <li><a href="/employer-dashboard-profile-seting.html">Profile Setting</a></li>
                          <li><a href="/employer-dashboard-pkgpayment.html">Package Payment</a></li>
                          <li><a href="/employer-dashboard-packages.html">Packages</a></li>
                          <li><a href="/employer-dashboard-newjob.html">Employer New Job</a></li>
                          <li><a href="/employer-dashboard-manage-jobs.html">Menage Jobs</a></li>
                          <li><a href="/employer-dashboard-confitmation.html">Employer Confitmation</a></li>
                        </ul>
                      </li>
                      <li><a href="/contact-us.html">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </aside>
              <Router><aside className="col-md-4">
                <div className="careerfy-right">
                  <ul className="careerfy-user-section">
                    <li>
                      <Routes>
                        <Route path="/login" element={<Login1 />} />
                        <Route path="/Regster" element={<Regster />} />
                      </Routes>
                    </li>
                  </ul>
                  <a href="/#" className="careerfy-simple-btn careerfy-bgcolor"><span> <i className="careerfy-icon fa fa-upload"></i> Post Job</span></a>
                </div>
              </aside></Router>
              <div className="d-flex align-items-center justify-content-center">

              </div>
              {/*               <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <Register />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
 */}
            </div>
          </div>
        </header>



        <div className="careerfy-banner careerfy-typo-wrap">
          <span className="careerfy-banner-transparent"></span>
          <div className="careerfy-banner-caption">
            <div className="container">
              <h1>Aim Higher. Reach Farther. Dream Bigger.</h1>
              <p>A better career is out there. We'll help you find it to use.</p>
              <form className="careerfy-banner-search">
                <ul>
                  <li>
                    <input type="text" />
                  </li>
                  <li>
                    <input type="text" />
                    <i className="fa fa-location-arrow"></i>
                  </li>
                  <li>
                    <div className="careerfy-select-style">
                      <select>
                        <option>Categories</option>
                        <option>Categories</option>
                        <option>Categories</option>
                      </select>
                    </div>
                  </li>
                  <li className="careerfy-banner-submit"> <input type="submit" />
                    <i className="fa fa-search"></i> </li>
                </ul>
              </form>
              <div className="careerfy-banner-btn">
                <a href="/#" className="careerfy-bgcolorhover"><i className="careerfy-icon fa fa-upload"></i> Upload Your Resume</a>
                <a href="/#" className="careerfy-bgcolorhover"><i className="careerfy-icon fa fa-suitcase"></i> Hiring? Post a job for free</a>
              </div>
            </div>
          </div>
        </div>

        <div className="careerfy-main-content">

          <div className="careerfy-main-section careerfy-counter-full">
            <div className="container">
              <div className="row">

                <div className="col-md-12">

                  <div className="careerfy-counter">
                    <ul className="row">
                      <li className="col-md-4">
                        <span className="word-counter">123,012</span>
                        <small>Jobs Added</small>
                      </li>
                      <li className="col-md-4">
                        <span className="word-counter">187,432</span>
                        <small>Active Resumes</small>
                      </li>
                      <li className="col-md-4">
                        <span className="word-counter">140,312</span>
                        <small>Positions Matched</small>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="careerfy-main-section">
            <div className="container">
              <div className="row">

                <div className="col-md-12 careerfy-typo-wrap">

                  <section className="careerfy-fancy-title">
                    <h2>Popular Job Categories</h2>
                    <p>A better career is out there. We'll help you find it to use.</p>
                  </section>

                  <div className="categories-list">
                    <ul className="careerfy-row">
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-building"></i>
                        <a href="/#">construction / facilities</a>
                        <span>(15 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-car"></i>
                        <a href="/#">automotive jobs</a>
                        <span>(12 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-calculator"></i>
                        <a href="/#">Accounting / Finance</a>
                        <span>(8 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-medkit"></i>
                        <a href="/#">Health Care</a>
                        <span>(5 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-tv"></i>
                        <a href="/#">Telecommunications</a>
                        <span>(7 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-book"></i>
                        <a href="/#">education training</a>
                        <span>(22 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon fa fa-utensils"></i>
                        <a href="/#">Restaurant / food services</a>
                        <span>(30 Open Vacancies)</span>
                      </li>
                      <li className="careerfy-column-3">
                        <i className="careerfy-icon careerfy-business"></i>
                        <a href="/#">Sales &amp; Marketing</a>
                        <span>(40 Open Vacancies)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="careerfy-plain-btn"> <a href="/#">Browse All Categories</a> </div>

                </div>

              </div>
            </div>
          </div>

          <div className="careerfy-main-section careerfy-parallex-full">
            <div className="container">
              <div className="row">

                <aside className="col-md-6 careerfy-typo-wrap">
                  <div className="careerfy-parallex-text">
                    <h2>Millions of jobs. <br /> Find the one that’s right for you.</h2>
                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                    <a href="/#" className="careerfy-static-btn careerfy-bgcolor"><span>Search Jobs</span></a>
                  </div>
                </aside>
                <aside className="col-md-6 careerfy-typo-wrap"> <div className="careerfy-right"><img src={require('./assets/images/parallex-thumb-1.png')} alt="" /></div> </aside>

              </div>
            </div>
          </div>

          <div className="careerfy-main-section">
            <div className="container">
              <div className="row">

                <div className="col-md-12 careerfy-typo-wrap">
                  <section className="careerfy-fancy-title">
                    <h2>Featured Jobs Listings</h2>
                    <p>A better career is out there. We'll help you find it to use.</p>
                  </section>

                  <div className="careerfy-job-listing careerfy-featured-listing">
                    <ul className="careerfy-row">
                      <li className="careerfy-column-6">
                        <div className="careerfy-table-layer">
                          <div className="careerfy-table-row">
                            <figure><a href="/#"><img src={require('./assets/images/featured-listing-1.jpg')} alt="" /></a></figure>
                            <div className="careerfy-featured-listing-text">
                              <h2><a href="/#">Dropbox -- UX designer</a></h2>
                              <a href="/#" className="careerfy-like-list"><i className="careerfy-icon fa fa-heart"></i></a>
                              <time>September 15, 2017</time>
                              <div className="careerfy-featured-listing-options">
                                <ul>
                                  <li><i className="careerfy-icon careerfy-maps-and-flags"></i> <a href="/#">Rennes,</a> <a href="/#">France</a></li>
                                  <li><i className="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="/#">Accountancy</a></li>
                                </ul>
                                <a href="/#" className="careerfy-option-btn">Freelance</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="careerfy-column-6">
                        <div className="careerfy-table-layer">
                          <div className="careerfy-table-row">
                            <figure><a href="/#"><img src={require('./assets/images/featured-listing-2.jpg')} alt="" /></a></figure>
                            <div className="careerfy-featured-listing-text">
                              <h2><a href="/#">Dropbox -- UX designer</a></h2>
                              <a href="/#" className="careerfy-like-list"><i className="careerfy-icon fa fa-heart"></i></a>
                              <time dateTime="2008-02-14 20:00">September 15, 2017</time>
                              <div className="careerfy-featured-listing-options">
                                <ul>
                                  <li><i className="careerfy-icon careerfy-maps-and-flags"></i> <a href="/#">Derry,</a> <a href="/#">United Kingdom</a></li>
                                  <li><i className="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="/#">Automotive</a></li>
                                </ul>
                                <a href="/#" className="careerfy-option-btn careerfy-blue">Full time</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="careerfy-column-6">
                        <div className="careerfy-table-layer">
                          <div className="careerfy-table-row">
                            <figure><a href="/#"><img src={require('./assets/images/featured-listing-3.jpg')} alt="" /></a></figure>
                            <div className="careerfy-featured-listing-text">
                              <h2><a href="/#">Dropbox -- UX designer</a></h2>
                              <a href="/#" className="careerfy-like-list"><i className="careerfy-icon fa fa-heart"></i></a>
                              <time dateTime="2008-02-14 20:00">September 15, 2017</time>
                              <div className="careerfy-featured-listing-options">
                                <ul>
                                  <li><i className="careerfy-icon careerfy-maps-and-flags"></i> <a href="/#">Aberdeen,</a> <a href="/#">United Kingdom</a></li>
                                  <li><i className="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="/#">Banking</a></li>
                                </ul>
                                <a href="/#" className="careerfy-option-btn careerfy-red">Temporary</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="careerfy-column-6">
                        <div className="careerfy-table-layer">
                          <div className="careerfy-table-row">
                            <figure><a href="/#"><img src={require('./assets/images/featured-listing-4.jpg')} alt="" /></a></figure>
                            <div className="careerfy-featured-listing-text">
                              <h2><a href="/#">Dropbox -- UX designer</a></h2>
                              <a href="/#" className="careerfy-like-list"><i className="careerfy-icon fa fa-heart"></i></a>
                              <time dateTime="2008-02-14 20:00">September 15, 2017</time>
                              <div className="careerfy-featured-listing-options">
                                <ul>
                                  <li><i className="careerfy-icon careerfy-maps-and-flags"></i> <a href="/#">Saint-Etienne,</a> <a href="/#">France</a></li>
                                  <li><i className="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="/#">Restaurant</a></li>
                                </ul>
                                <a href="/#" className="careerfy-option-btn careerfy-green">Part time</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="careerfy-column-6">
                        <div className="careerfy-table-layer">
                          <div className="careerfy-table-row">
                            <figure><a href="/#"><img src={require('./assets/images/featured-listing-5.jpg')} alt="" /></a></figure>
                            <div className="careerfy-featured-listing-text">
                              <h2><a href="/#">Dropbox -- UX designer</a></h2>
                              <a href="/#" className="careerfy-like-list"><i className="careerfy-icon fa fa-heart"></i></a>
                              <time dateTime="2008-02-14 20:00">September 15, 2017</time>
                              <div className="careerfy-featured-listing-options">
                                <ul>
                                  <li><i className="careerfy-icon careerfy-maps-and-flags"></i> <a href="/#">London,</a> <a href="/#">United Kingdom</a></li>
                                  <li><i className="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="/#">Real Estate</a></li>
                                </ul>
                                <a href="/#" className="careerfy-option-btn careerfy-blue">Full time</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="careerfy-column-6">
                        <div className="careerfy-table-layer">
                          <div className="careerfy-table-row">
                            <figure><a href="/#"><img src={require('./assets/images/featured-listing-6.jpg')} alt="" /></a></figure>
                            <div className="careerfy-featured-listing-text">
                              <h2><a href="/#">Dropbox -- UX designer</a></h2>
                              <a href="/#" className="careerfy-like-list"><i className="careerfy-icon fa fa-heart"></i></a>
                              <time dateTime="2008-02-14 20:00">September 15, 2017</time>
                              <div className="careerfy-featured-listing-options">
                                <ul>
                                  <li><i className="careerfy-icon careerfy-maps-and-flags"></i> <a href="/#">Rennes,</a> <a href="/#">France</a></li>
                                  <li><i className="careerfy-icon careerfy-filter-tool-black-shape"></i> <a href="/#">Education</a></li>
                                </ul>
                                <a href="/#" className="careerfy-option-btn">Freelance</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Featured Jobs Listings --> */}
                  <div className="careerfy-plain-btn"> <a href="/#">View All Jobs</a> </div>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Main Section --> */}

          {/* <!-- Main Section --> */}
          {/* <div className="careerfy-main-section careerfy-testimonial-full">
            <div className="container-fluid">
              <div className="row">

                <div className="careerfy-typo-wrap">
                  <div className="careerfy-testimonial-section">
                    <div className="row">
                      <aside className="col-md-5"> <img src={require('./assets/images/testimonial-thumb-1.jpg')} alt="" /> </aside>
                      <aside className="col-md-7">
                        <div className="careerfy-testimonial-slider slick-initialized slick-slider"><span className="slick-arrow-left slick-arrow"><i className="careerfy-icon careerfy-arrows4"></i></span>
                          <div className="slick-list draggable"><div className="slick-track" style={{ opacity: "1", width: "1825px", transform: "translate3d(-365px, 0px, 0px)" }}><div className="careerfy-testimonial-slide-layer slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{ width: "365px" }}>
                            <div className="careerfy-testimonial-wrap">
                              <p>I just got a job that I applied for via JobSearch! I used the site all the time during my job hunt.</p>
                              <div className="careerfy-testimonial-text">
                                <h2>Richard Anderson</h2>
                                <span>Nevada, USA</span>
                              </div>
                            </div>
                          </div><div className="careerfy-testimonial-slide-layer slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{ width: "365px" }}>
                              <div className="careerfy-testimonial-wrap">
                                <p>I just got a job that I applied for via JobSearch! I used the site all the time during my job hunt.</p>
                                <div className="careerfy-testimonial-text">
                                  <h2>Richard Anderson</h2>
                                  <span>Nevada, USA</span>
                                </div>
                              </div>
                            </div><div className="careerfy-testimonial-slide-layer slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style={{ width: "365px" }}>
                              <div className="careerfy-testimonial-wrap">
                                <p>I just got a job that I applied for via JobSearch! I used the site all the time during my job hunt.</p>
                                <div className="careerfy-testimonial-text">
                                  <h2>Richard Anderson</h2>
                                  <span>Nevada, USA</span>
                                </div>
                              </div>
                            </div><div className="careerfy-testimonial-slide-layer slick-slide slick-cloned" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{ width: "365px" }}>
                              <div className="careerfy-testimonial-wrap">
                                <p>I just got a job that I applied for via JobSearch! I used the site all the time during my job hunt.</p>
                                <div className="careerfy-testimonial-text">
                                  <h2>Richard Anderson</h2>
                                  <span>Nevada, USA</span>
                                </div>
                              </div>
                            </div><div className="careerfy-testimonial-slide-layer slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{ width: "365px" }}>
                              <div className="careerfy-testimonial-wrap">
                                <p>I just got a job that I applied for via JobSearch! I used the site all the time during my job hunt.</p>
                                <div className="careerfy-testimonial-text">
                                  <h2>Richard Anderson</h2>
                                  <span>Nevada, USA</span>
                                </div>
                              </div>
                            </div></div></div>

                          <span className="slick-arrow-right slick-arrow"><i className="careerfy-icon careerfy-arrows4"></i></span></div>
                      </aside>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div> */}
          {/* <!-- Main Section --> */}

          {/* <!-- Main Section --> */}
          <div className="careerfy-main-section">
            <div className="container">
              <div className="row">

                <div className="col-md-12">
                  {/* <!-- Fancy Title --> */}
                  <section className="careerfy-fancy-title">
                    <h2>From Our Blogs</h2>
                    <p>A better career is out there. We'll help you find it to use.</p>
                  </section>
                  {/* <!-- Blog --> */}
                  <div className="careerfy-blog careerfy-blog-grid">
                    <ul className="row">
                      <li className="col-md-4">
                        <figure><a href="/#"><img src={require('./assets/images/blog-grid-1.jpg')} alt="" /></a></figure>
                        <div className="careerfy-blog-grid-text">
                          <div className="careerfy-blog-tag"> <a href="/#">Culture</a> </div>
                          <h2><a href="/#">Are You Paid Fairly? See Your Market Worth in Seconds</a></h2>
                          <ul className="careerfy-blog-grid-option">
                            <li>BY <a href="/#" className="careerfy-color">Click mag staff</a></li>
                            <li><time dateTime="2008-02-14 20:00">OCT 6, 2016</time></li>
                          </ul>
                          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est.</p>
                          <a href="/#" className="careerfy-read-more careerfy-bgcolor">Read Articles</a>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <figure><a href="/#"><img src={require('./assets/images/blog-grid-2.jpg')} alt="" /></a></figure>
                        <div className="careerfy-blog-grid-text">
                          <div className="careerfy-blog-tag"> <a href="/#">ENTERTAINMENT</a> </div>
                          <h2><a href="/#">Are You Paid Fairly? See Your Market Worth in Seconds</a></h2>
                          <ul className="careerfy-blog-grid-option">
                            <li>BY <a href="/#" className="careerfy-color">Click mag staff</a></li>
                            <li><time dateTime="2008-02-14 20:00">OCT 6, 2016</time></li>
                          </ul>
                          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est.</p>
                          <a href="/#" className="careerfy-read-more careerfy-bgcolor">Read Articles</a>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <figure><a href="/#"><img src={require('./assets/images/blog-grid-3.jpg')} alt="" /></a></figure>
                        <div className="careerfy-blog-grid-text">
                          <div className="careerfy-blog-tag"> <a href="/#">Living</a> </div>
                          <h2><a href="/#">Are You Paid Fairly? See Your Market Worth in Seconds</a></h2>
                          <ul className="careerfy-blog-grid-option">
                            <li>BY <a href="/#" className="careerfy-color">Click mag staff</a></li>
                            <li><time dateTime="2008-02-14 20:00">OCT 6, 2016</time></li>
                          </ul>
                          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est.</p>
                          <a href="/#" className="careerfy-read-more careerfy-bgcolor">Read Articles</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Main Section --> */}

          {/* <!-- Main Section --> */}
          <div className="careerfy-main-section careerfy-parallex-text-full">
            <div className="container">
              <div className="row">

                <aside className="col-md-6 careerfy-typo-wrap">
                  <div className="careerfy-parallex-text careerfy-logo-text">
                    <h2>Millions of jobs. <br /> Find the one that’s right for you.</h2>
                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there. Use JobSearch to find it.</p>
                    <a href="/#" className="careerfy-static-btn careerfy-bgcolor"><span>Search Jobs</span></a>
                  </div>
                </aside>
                <aside className="col-md-6 careerfy-typo-wrap"> <div className="careerfy-logo-thumb"><img src="./multiple-logos.jpg" alt="" /></div> </aside>

              </div>
            </div>
          </div>
          {/* <!-- Main Section --> */}

        </div>
        {/* <!-- Main Content --> */}

        {/* <!-- Footer --> */}
        <footer id="careerfy-footer" className="careerfy-footer-one">
          <div className="container">
            {/* <!-- Footer Widget --> */}
            <div className="careerfy-footer-widget">
              <div className="row">
                <aside className="widget col-md-4 widget_contact_info">
                  <div className="widget_contact_wrap">
                    <a className="careerfy-footer-logo" href="/index.html"><img src="./footer-logo.png" alt="" /></a>
                    <p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper. Sed coquat sapien faucibus quam.</p>
                    <a href="/#" className="careerfy-classic-btn careerfy-bgcolor">Learn more</a>
                  </div>
                </aside>
                <aside className="widget col-md-3 widget_nav_manu">
                  <div className="footer-widget-title"><h2>Quick Links</h2></div>
                  <ul>
                    <li><a href="/#">Shortcodes</a></li>
                    <li><a href="/#">Job Page</a></li>
                    <li><a href="/#">Job Page Alternative</a></li>
                    <li><a href="/#">Resume Page</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contact</a></li>
                  </ul>
                </aside>
                <aside className="widget col-md-3 widget_nav_manu">
                  <div className="footer-widget-title"><h2>For Candidates</h2></div>
                  <ul>
                    <li><a href="/#">Browse Jobs</a></li>
                    <li><a href="/#">Browse Categories</a></li>
                    <li><a href="/#">Submit Resume</a></li>
                    <li><a href="/#">Candidate Dashboard</a></li>
                    <li><a href="/#">Job Alerts</a></li>
                    <li><a href="/#">My Bookmarks</a></li>
                  </ul>
                </aside>
                <aside className="widget col-md-2 widget_nav_manu">
                  <div className="footer-widget-title"><h2>For Employers</h2></div>
                  <ul>
                    <li><a href="/#">Browse Candidates</a></li>
                    <li><a href="/#">Employer Dashboard</a></li>
                    <li><a href="/#">Add Job</a></li>
                    <li><a href="/#">Job Packages</a></li>
                  </ul>
                </aside>
              </div>
            </div>
            {/* <!-- Footer Widget --> */}
            {/* <!-- CopyRight --> */}
            <div className="careerfy-copyright">
              <p>Copyrights © 2018 All Rights Reserved by <a href="/#" className="careerfy-color">KiteCareer</a></p>
              <ul className="careerfy-social-network">
                <li><a href="/#" className="careerfy-bgcolorhover fa fa-facebook"></a></li>
                <li><a href="/#" className="careerfy-bgcolorhover fa fa-twitter"></a></li>
                <li><a href="/#" className="careerfy-bgcolorhover fa fa-dribbble"></a></li>
                <li><a href="/#" className="careerfy-bgcolorhover fa fa-linkedin"></a></li>
                <li><a href="/#" className="careerfy-bgcolorhover fa fa-instagram"></a></li>
              </ul>
            </div>
            {/* <!-- CopyRight --> */}
          </div>
        </footer>

      </div>



    </div>
  );
}

export default App;
