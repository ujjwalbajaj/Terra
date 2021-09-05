
import React from 'react';
import jhonsImage1 from "../images/jons_img1.png";
import abouts from "../images/imag.jpg";
export function Roadmap() {

  return (
            <div className="licens">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2>Roadmap</h2>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div id="licens" className="carousel slide licens_Carousel " data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#licens" data-slide-to="0" className="active"></li>
                        <li data-target="#licens" data-slide-to="1"></li>
                        <li data-target="#licens" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="carousel-caption ">
                                    <div className="row d_flex">
                                    <div  className="col-md-6">
                                        <div className="test_box">
                                            <div className="jons">
                                                <h4>Q4 2021</h4>
                                            </div>
                                            <p>Beta Testing</p>
                                            <a className="read_more" href="#">Play Online</a>
                                        </div>
                                    </div>
                                    <div  className="col-md-6">
                                        <div className="test_box">
                                            <div className="jons">
                                                <figure><img src={jhonsImage1} alt="#"/></figure>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption">
                                    <div className="row d_flex">
                                    <div  className="col-md-6">
                                        <div className="test_box">
                                            <div className="jons">
                                                <h4>Q1 2022</h4>
                                            </div>
                                            <p>Public sale. Mobile support.</p>
                                            <a className="read_more" href="#">Play Online</a>
                                        </div>
                                    </div>
                                    <div  className="col-md-6">
                                        <div className="test_box">
                                            <div className="jons">
                                                <figure><img  src={jhonsImage1}  alt="#"/></figure>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption">
                                    <div className="row d_flex">
                                    <div  className="col-md-6">
                                        <div className="test_box">
                                            <div className="jons">
                                                <h4>Q2 2022</h4>
                                            </div>
                                            <p>Increased number of games</p>
                                            <a className="read_more" href="#">Play Online</a>
                                        </div>
                                    </div>
                                    <div  className="col-md-6">
                                        <div className="test_box">
                                            <div className="jons">
                                                <figure><img  src={jhonsImage1}  alt="#"/></figure>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#licens" role="button" data-slide="prev">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </a>
                        <a className="carousel-control-next" href="#licens" role="button" data-slide="next">
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <p className="lorem"></p>
                </div>
                <div id="about" className="col-md-12">
                    <ul className="spinit">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="two_box">
                        <div className="row d_flex">
                        <div className="col-md-4">
                            <div className="many_box_img">
                                <figure><img src={abouts} alt="#"/></figure>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="many_box">
                                <p>How to use Terra Casino.
                                    Currency: To play, you must have a Terra wallet with UST stablecoins
                                    Own this casino: Terra casino is a decentralised DAO casino, if you own 'Terra Chips' token, you are part owner of this casino. You can participate in governance to decide how this casino is run. You are also entitled to a share of any profits this project makes.
                                    How we are different: Inlike other online casinos, this casino belongs to the people, a decentralised entity as opposed to a single entity making a profit. The code is open source. We give back to the community and charity. We want to make the casino experience as transparent and fair as possible.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
     
  );
}
