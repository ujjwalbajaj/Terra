
import React from 'react';
import customer from "../images/customer.png";

export function Customer() {

  return (
        <div id="customer"  className="customer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>The team behind Terra Casino</h2>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="customer_text">
                            <p>The team will remain anonymous until such time clear regulations arise on decentralised casinos. Nevertheless, an anonymous team is not an issue as the project is a DAO.</p>
                            <div className="customer_box">
                            <i><img src={customer} alt="#"/></i>
                            <h4>Anon</h4>
                            <span>For now...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
  );
}
