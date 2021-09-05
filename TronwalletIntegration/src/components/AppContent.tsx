
import React from 'react';
import { Footer } from './Footer';
import { Customer } from './Customer';
import { Roadmap } from './Roadmap';
import loader from "../images/loading.gif";
import logo from "../images/logo.png";
import menuIcon from "../images/menu_icon.png";
import bgMain from "../images/bg_main.jpg";
import blackJack from "../images/blackjack.jpg";
import slotJs from "../images/slotjs.png";
import comingSoon from "../images/COMING_SOON.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
export function AppContent() {

  return (
      <div>
        <div className="loader_bg">
            <div className="loader"><img src={loader} alt="#" /></div>
        </div>
        <div className="wrapper">
            <div className="sidebar">
               <nav id="sidebar">
                  <div id="dismiss">
                     <FontAwesomeIcon icon={faArrowLeft}/>
                  </div>
                  <ul className="list-unstyled components">
                     <li className="active">
                        <a href="#home">Home</a>
                     </li>
                     <li>
                        <a href="#about">About</a>
                     </li>
                     <li>
                        <a href="#game">Game</a>
                     </li>
                     <li>
                        <a href="#customer">Our customer</a>
                     </li>
                     <li>
                        <a href="#contact">Conatct</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div id="content">
               <header>
                  <div className="head_top">
                     <div className="header">
                        <div className="container-fluid">
                           <div className="row">
                              <div className="col-md-3 logo_section">
                                 <div className="full">
                                    <div className="center-desk">
                                       <div className="logo">
                                          <a href="index.html"><img src={logo} alt="#"/></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-9">
                                 <div className="right_header_info">
                                    <ul>
                                       <li className="menu_iconb">
                                          <a href="Javascript:void(0)">Connect Wallet</a>
                                       </li>
                                       <li>
                                          <button type="button" id="sidebarCollapse">
                                          <img src={menuIcon} alt="#" />
                                          </button>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>

               <section className="slider_section">
                  <div className="banner_main">
                     <img src={bgMain} alt="#"/>
                     <div className="container-fluid padding3">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="text-bg">
                                 <a href="#">Play now</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <div id="game" className="casino">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="titlepage">
                              <h2>Terra Casino Games</h2>
                              <span></span>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-4 padding_bottom">
                           <div className="game_box" >
                              <figure><img src={blackJack} alt="#"/></figure>
                           </div>
                           <div className="game">
                              <h3>Black Jack</h3>
                           </div>
                        </div>
                        <div className="col-md-4 padding_bottom">
                           <div className="game_box" >
                              <figure><img src={slotJs} /></figure>
                           </div>
                           <div className="game">
                              <h3>Slots</h3>
                           </div>
                        </div>
                        <div className="col-md-4 padding_bottom">
                           <div className="game_box">
                              <figure><img src={comingSoon} alt="#"/></figure>
                           </div>
                           <div className="game">
                              <h3>Roulette</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="game_box">
                              <figure><img src={comingSoon} alt="#"/></figure>
                           </div>
                           <div className="game">
                              <h3>Horse Racing</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="game_box">
                              <figure><img src={comingSoon} alt="#"/></figure>
                           </div>
                           <div className="game">
                              <h3>Dice</h3>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="game_box">
                              <figure><img src={comingSoon} alt="#"/></figure>
                           </div>
                           <div className="game">
                              <h3>More</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <Roadmap />
               <Customer />
               <Footer />


            </div>
         </div>
         <div className="overlay"></div>
      </div>
  );
}
