import React from 'react';
// import React from 'react'
import Watch5 from "../../images/icons/watch-series5-logo.png";
import Banker from "../../images/home/banker.png";
import  Tv from "../../images/icons/apple-tv-logo.png";
import Watch6 from "../../images/icons/watch-siries6-logo .png";
import News from '../AppleNews/News';
import YouTube from "../YouTube/YouTube"


function Main() {
  
    return (
      <div>
        <section className="covid-19-wrapper top-50 ">
          <div className="container">
            <div className="covid-19 ">
              Evaluate COVID-19 symptoms and understand next steps
            </div>
          </div>
        </section>

        <section className="shopping-options-wrapper">
          <div className="container">
            <div className="shopping-option">
              <a href="#">Shop online</a> and get Specialist help, free
              no-contact delivery, and more.
            </div>
          </div>
        </section>

        <section className="first-hightlight-wrapper">
          <div className="container">
            <div className="title-wraper bold">iphone 12</div>

            <div className="description-wrape">Blast past fast</div>

            <div className="price-wraper row ">
              <div className="col-sm-6 col-md-12">
                {" "}
                From $29.12/mo. for 24 mo. or $699 before trade-in. <sup>2</sup>
              </div>
            </div>

            <div className="promotion-wraper row">
              <div className="col-sm-6 col-md-12">
                {" "}
                Buy directly from Apple with special carrier offers.
              </div>
            </div>

            <div className="link-wraper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="second-hightlight-wrapper">
          <div className="container">
            <div className="title-wraper ">iphone 12 pro</div>

            <div className="description-wrape">It's a leap year</div>

            <div className="price-wraper row text-center">
              <div className="col-sm-6 col-md-12">
                {" "}
                From $41.62/mo. for 24 mo.or $999 before trade-in.
              </div>
            </div>

            <div className="promotion-wraper row text-center">
              <div className="col-sm-6 col-md-12">
                {}
                Buy directly from Apple with special carrier offers.
              </div>
            </div>

            <div className="link-wraper">
              <ul>
                <li>
                  <a href="#">Learn more</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="third-hightlight-wrapper">
          <div className="container">
            <div className="title-wraper">ipad Air</div>

            <div className="description-wrape">
              Powerful. Colorful. Wonderful.
            </div>

            <div className="link-wraper">
              <ul>
                <li>
                  <a href="#">Learn more</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fourth-hightlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Watch6} alt="" />
                    </div>
                  </div>

                  <div className="description-wrape">
                    The future of health is on your wrist.
                  </div>

                  <div className="link-wraper">
                    <ul>
                      <li>
                        <a href="#">Learn more</a>
                      </li>
                      <li>
                        <a href="#">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper">MacBook Air</div>

                  <div className="description-wrape">Power. it's the Air.</div>

                  <div className="link-wraper">
                    <ul>
                      <li>
                        <a href="#">Learn more</a>
                      </li>
                      <li>
                        <a href="#">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fivth-highlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Tv} alt="" />
                    </div>
                  </div>

                  <div className="tvshow-logo-wraper">
                    <img src={Banker} alt="" />
                  </div>

                  <div className="watch-more-wrapper">
                    <a href="#">Watch now on the Apple TV App</a>
                  </div>
                </div>
              </div>

              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Watch5} alt="" />
                    </div>
                  </div>
                  <div className="description-wraper">
                    With the Always-On Retina display.
                    <br />
                    You’ve never seen a watch like this.
                  </div>

                  <div className="link-wraper">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <News /> */}
        <YouTube/>
       
      </div>
    );
  }


export default Main
