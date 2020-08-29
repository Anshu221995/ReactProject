import React, { Component } from 'react';
import './../App.css';

export class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="row margin-20 margin-bottom-0 margin-top-10">
                    <div className="col-sm-4">
                        <p>2018 &copy; © 2019 Pear Chef, Inc. | All Rights Reserved</p>
                        <p> Questions? Contact <a href="info@pearchef.com">Admin.</a></p>
                    </div>
                    <div className="col-sm-4 middle-section">&nbsp;</div>
                    <div className="col-sm-4">
                        
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer
