// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Dark Home Layout
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`/`} component={DarkPortfolioLanding}/>

                    {/* Element Layot */}
                    <Route exact path={`/service`} component={Service}/>
                    <Route exact path={`/service-details`} component={ServiceDetails}/>
                    <Route exact path={`/contact`} component={Contact}/>
                    <Route exact path={`/about`} component={About}/>
                    <Route exact path={`/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`/blog`} component={Blog}/>
                    <Route exact path={`/blog-details`} component={BlogDetails}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`/team`} component={Team}/>
                    <Route exact path={`/counters`} component={Counters}/>
                    <Route exact path={`/testimonial`} component={Testimonial}/>
                    <Route exact path={`/portfolio`} component={Portfolio}/>
                    <Route exact path={`/video-popup`} component={VideoPopup}/>
                    <Route exact path={`/gallery`} component={Gallery}/>
                    <Route exact path={`/clint-logo`} component={Brand}/>
                    <Route exact path={`/progressbar`} component={ProgressBar}/>
                    <Route exact path={`/contact-form`} component={ContactForm}/>
                    <Route exact path={`/google-map`} component={GoogleMap}/>
                    <Route exact path={`/columns`} component={Columns}/>
                    <Route exact path={`/pricing-table`} component={PricingTable}/>
                    
                    <Route path={`/404`} component={error404}/>
                    <Route component={error404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>,
    document.getElementById('root'));
