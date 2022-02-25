import React, {Component} from "react";
import logo from '../assets/images/logo.png'

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="row">
                <div className="col-12 col-lg-5">
                    <a href="index.html"><img alt="logo" width="40" height="40" src={logo}/></a>
                    <div className="about">Plan and book your perfect trip with 
                    expert advice, travel tips for vehicle
                    information from us
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-2">
                    <div className="destinations">
                    <h5>Destinations</h5>
                    <a href="#">Bali</a>
                    <a href="#">Yogyakarta</a>
                    <a href="#">Jakarta</a>
                    <a href="#">Kalimantan</a>
                    <a href="#">Malang</a>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-2">
                    <div className="vehicles">
                    <h5>Vehicles</h5>
                    <a href="#">Bike</a>
                    <a href="#">Cars</a>
                    <a href="#">Motorbike</a>
                    <a href="#">Return Times</a>
                    <a href="#">FAQs</a>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <div className="interests">
                    <h5>Interests</h5>
                    <a href="#">Adventure Travel</a>
                    <a href="#">Art and Culture</a>
                    <a href="#">Wildlife and Nature</a>
                    <a href="#">Family Holidays</a>
                    <a href="#">Culinary Trip</a>
                    </div>
                </div>
                </div>
                <div className="copyright">©2022 Seran Center. All rights reserved</div>
                <div className="socmeds">
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </footer>
        )
    }
}